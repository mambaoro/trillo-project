/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const cors = require('cors');
// const http = require('http');
const app = express();
// const { ApolloServer } = require('apollo-server-express');
// Needed for importing schema.graphql
// const { importSchema } = require('graphql-import');

app.use(cors());

// const typeDefs = importSchema('server/schema/schema.graphql');
// const resolvers = require('./resolvers/index.js');

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   // Remove the line below and start using 'req'
//   // eslint-disable-next-line no-unused-vars
//   context: async ({ req, connection }) => ({ connection, req }),
// });

// server.applyMiddleware({ app });
// const httpServer = http.createServer(app);
// server.installSubscriptionHandlers(httpServer);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
