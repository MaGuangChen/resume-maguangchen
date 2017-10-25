const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require('mongoose');

const user = mongoose.model('user');
const UserType =  require('./user_type');
const company = mongoose.model('company');
const CompanyType =  require('./company_type');
const message = mongoose.model('message');
const MessageType = require('./message_type');
const receiveMessage = mongoose.model('receiveMessage');
const ReceiveMessageType = require('./receiveMessage_type');

const companyMutation = require('../mutation/companyMutation');

const { addCompanyToUser, editCompanyName } = companyMutation;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
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
	  editCompanyName: editCompanyName,
	  editCompanyPosition: {
	    type: CompanyType,
		args: {
			id: { type: GraphQLID },
			position: { type: GraphQLString},
		},
		resolve(parentValue, args){
			const { id, position } = args;
			return company.update({
				_id: id,
			}, { $set: { position } });
		}
	  },
	  editCompanyLocation: {
	    type: CompanyType,
		args: {
			id: { type: GraphQLID },
			location: { type: GraphQLString},
		},
		resolve(parentValue, args){
			const { id, location } = args;
			return company.update({
				_id: id,
			}, { $set: { location } });
		}
	  },
	  editCompanyPhoneNumber: {
	    type: CompanyType,
		args: {
			id: { type: GraphQLID },
			phoneNumber: { type: GraphQLString},
		},
		resolve(parentValue, args){
			const { id, phoneNumber } = args;
			return company.update({
				_id: id,
			}, { $set: { phoneNumber } });
		}
	  },
	  editCompanyContactPeople: {
	    type: CompanyType,
		args: {
			id: { type: GraphQLID },
			contactPeople: { type: GraphQLString},
		},
		resolve(parentValue, args){
			const { id, contactPeople } = args;
			return company.update({
				_id: id,
			}, { $set: { contactPeople } });
		}
	  },
	  editCompanyEmail: {
	    type: CompanyType,
		args: {
			id: { type: GraphQLID },
			eMail: { type: GraphQLString},
		},
		resolve(parentValue, args){
			const { id, eMail } = args;
			return company.update({
				_id: id,
			}, { $set: { eMail } });
		}
	  },
  }
});

module.exports = mutation;
