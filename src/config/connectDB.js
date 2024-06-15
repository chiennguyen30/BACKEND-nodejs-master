const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_URL, "root", null, {
  // host: "127.0.0.1",
  // dialect: "mysql",
  // port: 3306,
  logging: false,
  dialect: "sqlite",
  storage: "./src/database/database.sqlite",
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
