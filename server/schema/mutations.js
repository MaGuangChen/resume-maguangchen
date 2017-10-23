const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const User = mongoose.model('user');
const UserType =  require('./user_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
  	addUser: {
  		type: UserType,
  		args: {
  			acount: { type: GraphQLString }
  		},
  		resolve(parentValue, { acount }){
  			return (new User({ acount })).save()
  		}
  	}
  }
});

module.exports = mutation;