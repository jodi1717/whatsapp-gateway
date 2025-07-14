// server/config/Database.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Koneksi ke database berhasil.");
  } catch (error) {
    console.error("❌ Gagal koneksi ke MySQL:", error);
  }
};

module.exports = { sequelize, connectDatabase };
