const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const receiveMessage = mongoose.model('receiveMessage');

const ReceiveMessageType = new GraphQLObjectType({
  name: 'ReceiveMessageType',
  fields: () => ({
    text: { type: GraphQLString },
    time: { type: GraphQLInt },
    user: { 
      type: require('./user_type'),
      resolve(parentValue){
        return Message.findById(parentValue).populate('user')
          .then((receiveMessage) => {
            return receiveMessage.user;
          });
      }
    }
  })
});

module.exports = ReceiveMessageType;