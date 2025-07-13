import { Sequelize } from "sequelize";
import mysql from "mysql2";
import { modules } from "../../lib/index.js";
import { moment } from "./index.js";

const { MYSQL_URL } = process.env;

const sequelize = new Sequelize(MYSQL_URL, {
	dialect: "mysql",
	logging: false,
});

async function connectDatabase() {
	await sequelize
		.authenticate()
		.then(() => {
			console.log(modules.color("[APP]", "#EB6112"), modules.color(moment().format("DD/MM/YY HH:mm:ss"), "#F8C471"), modules.color(`✅ Connected to MySQL via Railway`, "#82E0AA"));
		})
		.catch((error) => {
			console.error("❌ Gagal koneksi ke MySQL:", error);
		});

	await sequelize.sync({ force: false, alter: false }).then(() => {
		console.log(modules.color("[APP]", "#EB6112"), modules.color(moment().format("DD/MM/YY HH:mm:ss"), "#F8C471"), modules.color(`🔁 Re-Sync Database`, "#82E0AA"));
	});
}

export { connectDatabase, sequelize };
