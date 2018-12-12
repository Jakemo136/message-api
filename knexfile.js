
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/messages_db'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/messages_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },   
  
  docker_test: {
    client: 'postgresql',
    connection: {
      database: 'messages_test',
      user: 'postgres',
      host: 'postgres'
    }
  }
}
