const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const message = mongoose.model('message');

const MessageType = new GraphQLObjectType({
    name: 'MessageType',
    fields: () => ({
        id: { type: GraphQLID },
        userAcount: { type: GraphQLString },
        text: { type: GraphQLString },
        createdTime: { type: GraphQLString },
        sendToUserAcount: { type: GraphQLString },
        userMessage: {
            type: require('./userMessage_type'),
            resolve(parentValue) {
                return message.findById(parentValue).populate('userMessage')
                .then(message => {
                    return message.userMessage
                });
            }
        },
    })
});

module.exports = MessageType;