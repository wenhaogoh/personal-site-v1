import { Sequelize } from "sequelize";

import { DATABASE_URL, ON_GAE } from "../consts";

let sequelize: Sequelize;

if (ON_GAE) {
  const { GCSQL_DB_USER, GCSQL_DB_PASS, GCSQL_DB_NAME, GCSQL_CONNECTION_NAME } =
    process.env;

  sequelize = new Sequelize(GCSQL_DB_NAME!, GCSQL_DB_USER!, GCSQL_DB_PASS!, {
    logging: console.log,
    dialect: "postgres",
    host: `/cloudsql/${GCSQL_CONNECTION_NAME!}`,
  });
} else {
  // Local development
  sequelize = new Sequelize(DATABASE_URL, {
    logging: console.log,
  });
}

export default sequelize;
