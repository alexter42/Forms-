import Conversations from '../../collections/conversations';

export default function uploadConversationData(root, { conversation }) {
  console.log(conversation, root);
  let _id = Conversations.insert({
    conversation,
  });

  return Conversations.find({ _id }).fetch();
}
