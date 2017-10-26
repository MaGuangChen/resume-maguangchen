const graphql = require('graphql');
const mongoose = require('mongoose');
const { GraphQLObjectType, GraphQLString,
   GraphQLID, GraphQLInt } = graphql;

const company = mongoose.model('company');
const CompanyType =  require('../schema/type/company_type');
const user = mongoose.model('user');

const companyMutation = {
  editCompanyName: {
      type: CompanyType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString},
      },
      resolve(parentValue, { id, name }){
        return company.update({ _id: id }, { $set: { name } });
      }    
  },
  editCompanyPosition: {
      type: CompanyType,
      args: {
      id: { type: GraphQLID },
      position: { type: GraphQLString},
      },
      resolve(parentValue, { id, position }){
          return company.update({ _id: id }, { $set: { position } });
      }
  },
  editCompanyLocation: {
      type: CompanyType,
      args: {
          id: { type: GraphQLID },
          location: { type: GraphQLString},
      },
      resolve(parentValue, { id, location }){
          return company.update({ _id: id }, { $set: { location } });
      }
  },
  editCompanyPhoneNumber: {
      type: CompanyType,
      args: {
          id: { type: GraphQLID },
          phoneNumber: { type: GraphQLString},
      },
      resolve(parentValue, { id, phoneNumber }){
          return company.update({ _id: id }, { $set: { phoneNumber } });
      }
  },
  editCompanyContactPeople: {
      type: CompanyType,
      args: {
          id: { type: GraphQLID },
          contactPeople: { type: GraphQLString},
      },
      resolve(parentValue, { id, contactPeople }){
          return company.update({ _id: id }, { $set: { contactPeople } });
      }
  },
  editCompanyEmail: {
      type: CompanyType,
      args: {
          id: { type: GraphQLID },
          eMail: { type: GraphQLString},
      },
      resolve(parentValue, { id, eMail }){
          return company.update({ _id: id }, { $set: { eMail } });
      }
  },
  editMinSalary: {
    type: CompanyType,
    args: {
        id: { type: GraphQLID },
        minSalary: { type: GraphQLInt},
    },
    resolve(parentValue, { id, minSalary }){
        return company.update({ _id: id }, { $set: { minSalary } });
    }
  },
  editMaxSalary: {
    type: CompanyType,
    args: {
        id: { type: GraphQLID },
        maxSalary: { type: GraphQLInt},
    },
    resolve(parentValue, { id, maxSalary }){
        return company.update({ _id: id }, { $set: { maxSalary } });
    }
  },
  editReserVationDate: {
    type: CompanyType,
    args: {
        id: { type: GraphQLID },
        reservationDate: { type: GraphQLString},
    },
    resolve(parentValue, { id, reservationDate }){
        return company.update({ _id: id }, { $set: { reservationDate } });
    }
  },
}

module.exports = companyMutation;
