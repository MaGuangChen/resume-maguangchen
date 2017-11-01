const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const MessageType = require('./message_type');
const userMessage = mongoose.model('userMessage');

const UserMessageType = new GraphQLObjectType({
  name: 'UserMessageType',
  fields: () => ({
    id: { type: GraphQLID },
    userAcount: { type: GraphQLString },
    message: {
      type: new GraphQLList(MessageType),
      resolve(parentValue) {
        return userMessage.findMessage(parentValue.id);
      }
    },
  })
});

module.exports = UserMessageType;