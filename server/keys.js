module.exports = {
  redisMasterHost: process.env.REDIS_MASTER_HOST,
  redisMasterPort: process.env.REDIS_MASTER_PORT,
  redisSlaveHost: process.env.REDIS_SLAVE_HOST,
  redisSlavePort: process.env.REDIS_SLAVE_PORT,
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT
};
