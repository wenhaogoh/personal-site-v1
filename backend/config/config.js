const {
  DATABASE_URL,
  GCSQL_DB_USER,
  GCSQL_DB_PASS,
  GCSQL_DB_NAME,
  GCSQL_CONNECTION_NAME,
  GCSQL_DB_SOCKET_PATH,
} = process.env;

module.exports = {
  development: {
    url: DATABASE_URL,
    dialect: "postgres",
  },
  test: {
    url: DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    username: GCSQL_DB_USER,
    password: GCSQL_DB_PASS,
    database: GCSQL_DB_NAME,
    dialect: "postgres",
    dialectOptions: {
      ssl: false,
    },
    host: `${GCSQL_DB_SOCKET_PATH}/${GCSQL_CONNECTION_NAME}`,
  },
};
