const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const User = mongoose.model('user');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    acount: { type: GraphQLString },
  	company: { type: GraphQLString },
  	position: { type: GraphQLString },
  })
});

module.exports = UserType;
