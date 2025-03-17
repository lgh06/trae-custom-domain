const fastify = require('fastify')({ logger: true });

fastify.get('/v1/models', async (request, reply) => {
    return {
        "data": [
          {
            "type": "model",
            "id": "claude-3-7-sonnet-20250219",
            "display_name": "Claude 3.7 Sonnet",
            "created_at": "2025-02-19T00:00:00Z"
          }
        ],
        "has_more": false,
        "first_id": "<string>",
        "last_id": "<string>"
      };
});

fastify.get('/v1/models/:id', async (request, reply) => {
    const { id } = request.params;
    return {
        "type": "model",
        "id": id,
        "display_name": "Claude 3.7 Sonnet",
        "created_at": "2025-02-19T00:00:00Z"
      };
});

const start = async () => {
    try {
        fastify.listen({
            port: 3000,
            host: '0.0.0.0'
        });
        fastify.log.info(`Server listening on 3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();