const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
	GraphQLObjectType, 
	GraphQLList, 
	GraphQLID, GraphQLNonNull } = graphql;

const UserType = require('./user_type');
const user = mongoose.model('user');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
      user: {
      	type: new GraphQLList(UserType),
      	resolve() {
      		return user.find({});
      	}
      } 
	})
})

module.exports = RootQuery;