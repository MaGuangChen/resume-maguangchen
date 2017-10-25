const graphql = require('graphql');
const mongoose = require('mongoose');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const company = mongoose.model('company');
const CompanyType =  require('../schema/company_type');
const user = mongoose.model('user');
// addCompanyToUser: {
//   type: CompanyType,
//   args: { 
//     userId: { type:  GraphQLID },
//     name: { type: GraphQLString },
//     position: { type: GraphQLString },
// },
// resolve(parentValue, { userId, name, position }) {
//     return user.addCompany( userId, name, position);
// }
// },

const companyMutation = {
  addCompanyToUser: {
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
  editCompanyName: {
    type: CompanyType,
    args: {
      id: { type: GraphQLID },
      name: { type: GraphQLString},
    },
    resolve(parentValue, args){
      const { id, name } = args;
      return company.update({
          _id: id,
      }, { $set: { name } });
    }    
  },
}

module.exports = companyMutation;
