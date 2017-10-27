const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const company = mongoose.model('company');

const CompanyType = new GraphQLObjectType({
    name: 'CompanyType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        position: { type: GraphQLString },
        reservationDate: { type: GraphQLString },
        minSalary: { type: GraphQLInt },
        maxSalary: { type: GraphQLInt },
        location: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        contactPeople: { type: GraphQLString },
        eMail: { type: GraphQLString },
        user: {
            type: require('./user_type'),
            resolve(parentValue) {
                return company.findById(parentValue).populate('user')
                .then(company => {
                    return company.user
                });
            }
        },
    })
});

module.exports = CompanyType;
