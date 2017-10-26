const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const Message = mongoose.model('message');

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: () => ({
    text: { type: GraphQLString },
    time: { type: GraphQLInt },
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
