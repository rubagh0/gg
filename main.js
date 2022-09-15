const { res } = require('pino-std-serializers');

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const food = ['kudu', 'mac', 'kfc'];
fastify.get('/food', (req, res) => {
    return food

});

const host = pro

fastify.post('/car', (req, res) => {
    const newc = req.body;
    console.log(newc);
    return cars
});

const makup = ['eyeliner', 'founfation', 'shado'];
fastify.get('/makup', (req, res) => {
    return makup
});

fastify.post('/makup', (req, res) => {
    const newcakup = req.body;
    console.log(newcakup);
    return makup
});
// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 4000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()