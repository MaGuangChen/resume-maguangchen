const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const msg = mongoose.model('msg');

const MsgType = new GraphQLObjectType({
    name: 'CompanyType',
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString},
        createdTime: { GraphQLString },
        user: {
            type: require('./user_type'),
            resolve(parentValue) {
                return msg.findById(parentValue).populate('user')
                .then(msg => {
                    return msg.user
                });
            }
        },
    })
});

module.exports = MsgType;