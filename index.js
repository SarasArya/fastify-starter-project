const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = function(fastify, opts, next) {
  // Load custom plugins including models
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
  });

  // Load global decorators
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'decorators'),
  });

  // Load all routes in project
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
  });

  // Add user context to request object
  // fastify.addHook('preHandler', async request => {
  //   request.userContext = { currentUser: {} };
  //   await fastify.loadUserContext(request, fastify.Models.AccessToken);
  // });
  next();
};
