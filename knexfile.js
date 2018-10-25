// Update with your config settings.

module.exports = {

  development: { },
  test: { },
  production: { },
  docker_test: {
    client: 'postgresql',
    connection: {
      database: 'messages_test',
      user: 'postgres',
      host: 'postgres'
    }
  }
};
