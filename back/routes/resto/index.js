'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/getRandom', async function (request, reply) {
    return 'this is an example'
  })
}
