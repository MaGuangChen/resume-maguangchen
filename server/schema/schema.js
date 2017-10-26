// const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./type/root_query_type');
const mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations,
});
  