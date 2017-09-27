import Conversations from '../../collections/conversations';

export default function() {
  let file = Conversations.find().fetch();
  return file;
}
