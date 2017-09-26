import { FilesCollection } from 'meteor/ostrio:files';
import { Meteor } from 'meteor/meteor';
import Grid from 'gridfs-stream';
import { MongoInternals } from 'meteor/mongo';
import fs from 'fs';

let gfs;

if (Meteor.isServer) {
  gfs = Grid(MongoInternals.defaultRemoteCollectionDriver().mongo.db, MongoInternals.NpmModule);
}

const Files = new FilesCollection({
  collectionName: 'files',
  allowClientCode: false, // Disallow remove files from Client
  debug: false,
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /csv|tab|xlsx/i.test(file.extension)) {
      return true;
    }
    return 'Please upload file, with size equal or less than 10MB';
  },
  onAfterUpload(file) {
    // Move file to GridFS
    Object.keys(file.versions).forEach(versionName => {
      const metadata = {
        versionName,
        fileId: file._id,
        storedAt: new Date(),
      }; // Optional
      const writeStream = gfs.createWriteStream({ filename: file.name, metadata });

      fs.createReadStream(file.versions[versionName].path).pipe(writeStream);

      writeStream.on(
        'close',
        Meteor.bindEnvironment(file => {
          const property = `versions.${versionName}.meta.gridFsFileId`;

          // If we store the ObjectID itself, Meteor (EJSON?) seems to convert it to a
          // LocalCollection.ObjectID, which GFS doesn't understand.
          this.collection.update(file._id, {
            $set: {
              [property]: file._id.toString(),
            },
          });
          this.unlink(this.collection.findOne(file._id), versionName); // Unlink files from FS
        })
      );
    });
  },
  interceptDownload(http, file, versionName) {
    // Serve file from GridFS
    const _id = (file.versions[versionName].meta || {}).gridFsFileId;
    if (_id) {
      const readStream = gfs.createReadStream({ _id });
      readStream.on('error', err => {
        throw err;
      });
      readStream.pipe(http.response);
    }
    return Boolean(_id); // Serve file from either GridFS or FS if it wasn't uploaded yet
  },
  onAfterRemove(files) {
    // Remove corresponding file from GridFS
    files.forEach(file => {
      Object.keys(file.versions).forEach(versionName => {
        const _id = (file.versions[versionName].meta || {}).gridFsFileId;
        if (_id)
          gfs.remove(
            {
              _id,
            },
            err => {
              if (err) throw err;
            }
          );
      });
    });
  },
});

export default Files;
