// server/config/Database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: 'mysql',
  logging: false,
});

export default async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL Connected!');
  } catch (error) {
    console.error('❌ Gagal koneksi ke MySQL:', error);
  }
}

export { sequelize };
