const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, 
    GraphQLID, GraphQLInt } = graphql;
const mongoose = require('mongoose');

const userMessage = mongoose.model('userMessage');
const UserMessageType =  require('../schema/type/userMessage_type');
const MessageType =  require('../schema/type/message_type');

const messageMutation = {
    addUserMessage: {
        type: UserMessageType,
        args: {
            userAcount: { type: GraphQLString },
        },
        resolve(parentValue, { userAcount }){
            return (new userMessage({ userAcount })).save()
        }
    },
    addMessageToUserMessage:  {
		type: MessageType,
		args: { 
            userAcount: { type: GraphQLString },
		    text: { type:  GraphQLString },
		    createdTime: { type: GraphQLString },
			sendToUserAcount: { type: GraphQLString },
		},
		resolve(parentValue, { userAcount, text, createdTime, sendToUserAcount }) {
            return userMessage.addMessage( userAcount, text, createdTime, sendToUserAcount );
		}
    },
    
};

module.exports = messageMutation;