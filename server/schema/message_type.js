const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const Message = mongoose.model('message');

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: () => ({
    text: { type: GraphQLString },
    user: {
      type: require('./user_type'),
      resolve(parentValue){
        return Message.findById(parentValue).populate('user')
          .then((message) => {
            return message.user;
          });
      }
    }
  })
});

module.exports = MessageType;
