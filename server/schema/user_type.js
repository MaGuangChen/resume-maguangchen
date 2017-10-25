const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const CompanyType = require('./company_type');
const MessageType = require('./message_type');
const user = mongoose.model('user');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    acount: { type: GraphQLString },
    password: { type: GraphQLString },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve(parentValue) {
        return user.findCompany(parentValue.id);
      }
    },
    messages: {
      type: new GraphQLList(MessageType),
      resolve(parentValue) {
        return user.findMessage(parentValue.id);
      }
    },
  })
});

module.exports = UserType;
