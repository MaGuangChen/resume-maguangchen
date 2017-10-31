const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require('mongoose');

const userMutation = require('../mutation/userMutation');
const companyMutation = require('../mutation/companyMutation');

const { addUser, deleteUser, receiveNewMessage, sendMessage, 
	addCompanyToUser } = userMutation;

const { editCompanyName, editCompanyPosition, 
	editCompanyLocation, editCompanyPhoneNumber, 
	editCompanyContactPeople,editCompanyEmail,
	editMinSalary, editMaxSalary, editReserVationDate,
	deleteCompany } = companyMutation;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
		addUser: addUser,
		deleteUser: deleteUser,
	  sendMessage : sendMessage,
		receiveNewMessage: receiveNewMessage,
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
  }
});

module.exports = mutation;
