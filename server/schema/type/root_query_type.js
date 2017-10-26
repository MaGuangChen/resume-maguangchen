const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
	GraphQLObjectType, 
	GraphQLList, 
	GraphQLID, GraphQLNonNull } = graphql;

const UserType = require('./user_type');
const user = mongoose.model('user');
const CompanyType = require('./company_type');
const company = mongoose.model('company');

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
	  }
	})
})

module.exports = RootQuery;