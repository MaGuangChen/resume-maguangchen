const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const receiveMessage = mongoose.model('receiveMessage');

const ReceiveMessageType = new GraphQLObjectType({
  name: 'ReceiveMessageType',
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    time: { type: GraphQLString },
    user: { 
      type: require('./user_type'),
      resolve(parentValue){
        return receiveMessage.findById(parentValue).populate('user')
          .then((receiveMessage) => {
            return receiveMessage.user;
          });
      }
    }
  })
});

module.exports = ReceiveMessageType;