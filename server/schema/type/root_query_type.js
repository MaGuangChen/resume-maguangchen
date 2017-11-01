const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
	GraphQLObjectType, 
	GraphQLList, 
	GraphQLID, GraphQLNonNull, GraphQLString } = graphql;

const UserType = require('./user_type');
const user = mongoose.model('user');
const CompanyType = require('./company_type');
const company = mongoose.model('company');
const UserMessageType = require('./userMessage_type');
const userMessage = mongoose.model('userMessage');
const MessageType = require('./message_type');
const message = mongoose.model('message');


const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
      users: {
      	type: new GraphQLList(UserType),
      	resolve() {
      		return user.find({});
      	}
	  },
	  user: {
		  type: UserType,
		  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
		  resolve(parentValue, { id }) {
			return user.findById(id);
		  }
	  },
	  company: {
		  type: CompanyType,
		  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
		  resolve(parentValue, { id }){
			  return company.findById(id);
		  }
	  },
	  userMessages: {
			type: new GraphQLList(UserMessageType),
			resolve() {
				return userMessage.find({})	;
			}
	  },
	  userMessage: {
		type: UserMessageType,
		args: { userAcount: { type: new GraphQLNonNull(GraphQLString) } },
		resolve(parentValue, { userAcount }) {
			return userMessage.findOne({ userAcount: userAcount });
		}
  	  },
	  message: {
		type: MessageType,
		args: { 
			sendToUserAcount: { type: new GraphQLNonNull(GraphQLString) } 
		},
		resolve(parentValue, {sendToUserAcount }) {
			return message.findOne({ sendToUserAcount: sendToUserAcount });
		}
	  }
	})	  
})

module.exports = RootQuery;