// Update with your config settings.

module.exports = {

  development: { },
  test: { },
  production: { },
  docker_test: {
    client: 'postgresql',
    connection: {
      database: 'users_with_secrets',
      user: 'postgres',
      host: 'postgres'
    }
  }
};
