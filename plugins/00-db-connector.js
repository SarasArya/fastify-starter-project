const mongoose = require('mongoose');
const fp = require('fastify-plugin');

const { NODE_ENV } = process.env;

async function dbConnector(fastify, opts, next) {
  try {
    const autoIndex = !!(NODE_ENV !== 'production' || NODE_ENV !== 'staging');
    const connection = await mongoose.connect(
      'mongodb://localhost:27017/rylahdb',
      { autoIndex }
    );
    fastify.decorate('mongoose', connection).addHook('onClose', (fastifyContext, done) => {
      fastifyContext.mongo.db.close(done);
    });
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = fp(dbConnector);
