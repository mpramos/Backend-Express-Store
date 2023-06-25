const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Tierras',
  password: 'admin123',
  port: 5432,
});

module.exports = pool;