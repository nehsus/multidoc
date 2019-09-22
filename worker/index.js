const keys = require('./keys');
const redis = require('redis');

const redisMasterClient = redis.createClient({
  host: keys.redisMasterHost,
  port: keys.redisMasterPort,
  retry_strategy: () => 1000
});
const sub = redisMasterClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
  redisMasterClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
