import User from './types/user';

const Mutation = `

input UserProfileInput {
  firstName: String!
  lastName: String!
  street: String!
  postalNumber: Int!
  city: String!
  birthday: Date!
  phoneMobile: String
  hometown: String
  regionalOffice: String
}

input FileInput {
  name: String!
  type: String!
  size: Int!
  path: String!
}


input Transmitter {
  age: Int
  birthPlace: String
  street: String
  education: String
  city: String
  state: String
  sex: String
  hometown: String
  ocupation: String
  gender: String
}

input Receiver {
  age: Int
  birthPlace: String
  street: String
  education: String
  city: String!
  state: String
  sex: String
  hometown: String
  ocupation: String
  gender: String
}


input ConversationData {
  transmitter: Transmitter
  receiver: Receiver
}


type Mutation {
  # User 
  updateUserAvatar(avatar: FileInput!, userId: ID): User
  updateEmail(email: String!, userId: ID): User
  updateUserProfile(profile: UserProfileInput, userId: ID): User  

  # Conversations
  uploadConversationData(conversation : ConversationData): JSON

}
`;
export default () => [Mutation, User];
