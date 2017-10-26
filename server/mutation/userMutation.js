const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, 
    GraphQLID, GraphQLInt } = graphql;
const mongoose = require('mongoose');

const user = mongoose.model('user');
const UserType =  require('../schema/type/user_type');
const MessageType = require('../schema/type/message_type');
const ReceiveMessageType = require('../schema/type/receiveMessage_type');
const CompanyType =  require('../schema/type/company_type');

const userMutation = {
    addUser: {
        type: UserType,
        args: {
            acount: { type: GraphQLString },
            password: { type: GraphQLString }
        },
        resolve(parentValue, { acount, password}){
            return (new user({ acount, password })).save()
        }
    },
    deleteUser: {
        type: UserType,
        args: { id: { type:  GraphQLID } },
        resolve(parentValue, { id }){
            return user.remove({ _id: id });
        }
    },
    sendMesage : {
        type: MessageType,
        args: { 
            userId: { type: GraphQLID },
            text: { type: GraphQLString },
            time: { type: GraphQLInt }
        },
        resolve(parentValue, { userId, text, time }) {
            return user.addMessage(userId, text, time);
        }
    },
    receiveNewMessage: {
        type: ReceiveMessageType,
        args: {
            userId: { type: GraphQLID },
            text: { type: GraphQLString },
            time: { type: GraphQLInt }
        },
        resolve(parentValue, { userId, text, time }) {
            return user.addReceiveMessage(userId, text, time);
        }
    },
    addCompanyToUser:  {
		type: CompanyType,
		args: { 
		    userId: { type:  GraphQLID },
		    name: { type: GraphQLString },
			position: { type: GraphQLString },
			reservationDate: { type: GraphQLString },
			minSalary: { type: GraphQLInt },
            maxSalary: { type: GraphQLInt }
		},
		resolve(parentValue, { userId, name, position }) {
		    return user.addCompany( userId, name, position);
		}
    },
    deleteCompany: {
        type: CompanyType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }) {
            return company.remove({ _id: id });
        }
    },
};

module.exports = userMutation;