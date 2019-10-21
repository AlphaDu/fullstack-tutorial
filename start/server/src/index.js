const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
