const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require('mongoose');

const userMutation = require('../mutation/userMutation');
const companyMutation = require('../mutation/companyMutation');
const messageMutation = require('../mutation/messageMutation');

const { addUser, deleteUser, addCompanyToUser } = userMutation;

const { editCompanyName, editCompanyPosition, 
	editCompanyLocation, editCompanyPhoneNumber, 
	editCompanyContactPeople,editCompanyEmail,
	editMinSalary, editMaxSalary, editReserVationDate,
	deleteCompany } = companyMutation;

const { addUserMessage, addMessageToUserMessage } = messageMutation;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
		addUser: addUser,
		deleteUser: deleteUser,
	  	addCompanyToUser: addCompanyToUser,
	  	deleteCompany: deleteCompany,
	 	 editCompanyName: editCompanyName,
	  	editCompanyPosition: editCompanyPosition,
	  	editCompanyLocation: editCompanyLocation,
	  	editCompanyPhoneNumber: editCompanyPhoneNumber,
	  	editCompanyContactPeople: editCompanyContactPeople,
		editCompanyEmail: editCompanyEmail,
		editMinSalary: editMinSalary,
		editMaxSalary: editMaxSalary,
		editReserVationDate: editReserVationDate,
		addUserMessage: addUserMessage,
		addMessageToUserMessage: addMessageToUserMessage
  }
});

module.exports = mutation;
