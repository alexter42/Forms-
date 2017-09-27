import User from './types/user';

const Query = `
  type Query {
    me: User
    user(_id: ID!): User
    getConversationsData: [JSON]
  }
`;
export default () => [Query, User];
