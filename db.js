const config = {
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : '1234',
      database : 'postgres'
    }
  };

  module.exports = require('knex')(config);