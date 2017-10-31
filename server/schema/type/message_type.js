const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const message = mongoose.model('message');

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    time: { type: GraphQLString },
    user: { 
      type: require('./user_type'),
      resolve(parentValue){
        return message.findById(parentValue).populate('user')
          .then((message) => {
            return message.user;
          });
      }
    }
  })
});

module.exports = MessageType;
