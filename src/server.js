const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

async function startServer() {
  // Create a new instance of the server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Get the URL to start the server
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log("🚀 Server ready at: " + url);
}

startServer();
