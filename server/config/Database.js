// server/config/Database.js

import { Sequelize } from "sequelize";

// Debug log untuk memastikan MYSQL_URL terbaca
console.log("MYSQL_URL:", process.env.MYSQL_URL);

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: "mysql",
  logging: false,
});

export default sequelize;
