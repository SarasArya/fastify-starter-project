const fp = require('fastify-plugin');
const fs = require('fs');
const util = require('../utils/beautify-filename');
const path = require('path');

const location = path.join(__dirname, '../controllers');
const controllerLoader = (fastify, opts, next) => {
  const Controllers = {};
  fs.readdir(location, (err, files) => {
    if (err) {
      next(err);
    }
    files.forEach(file => {
      // Get the ControllerName
      const ControllerName = util.beautifiedFileName(file);
      // Initialize empty object
      Controllers[ControllerName] = {};
      // Pass context to be populated
      require(`${location}/${file}`)(fastify, Controllers[ControllerName]);
    });
  });

  fastify.decorate('Controllers', Controllers);

  next();
};

module.exports = fp(controllerLoader);
