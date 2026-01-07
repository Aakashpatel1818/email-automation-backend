const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL,
  socket: { reconnectStrategy: (r) => Math.min(r * 50, 500) }
});

client.on('error', (err) => console.error('Redis:', err));
client.on('connect', () => console.log('✅ Redis OK'));

client.connect();

module.exports = client;
