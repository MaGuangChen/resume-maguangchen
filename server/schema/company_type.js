const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = graphql;

const Company = mongoose.model('company');

const CompanyType = new GraphQLObjectType({
    name: 'CompanyType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        location: { type: GraphQLString },
        position: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        contactPeople: { type: GraphQLString },
        eMail: { type: GraphQLString },
        user: {
            type: require('./user_type'),
            resolve(parentValue) {
                return Company.findById(parentValue).populate('user')
                .then(company => {
                    return company.user
                });
            }
        }

    })
});

module.exports = CompanyType;
