module.exports = async function(fastify) {
  fastify.all('/', async function() {
    return {
      success: true,
      message: 'Hi, Im Ultron!',
    };
  });
};
