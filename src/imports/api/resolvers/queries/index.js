import { Roles } from 'meteor/nicolaslopezj:roles';
import me from './me';
import user from './user';
import getConversationsData from './getConversationsData';

export default {
  getConversationsData,
  me,
  @Roles.action('viewUser') user,
};
