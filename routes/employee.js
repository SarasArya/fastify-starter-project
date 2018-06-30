module.exports = async function(fastify) {
  // eslint-disable-next-line
  fastify.post('/create', async function(request, reply) {
    const { username, password } = request.body;
    console.log(username, password);
    const response = {
      success: false,
      message: 'Destiny has arrived',
    };

    return reply.send(response);
  });
};
module.exports.autoPrefix = '/Employees';
