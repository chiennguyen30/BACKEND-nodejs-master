const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(process.envDB_URL, "root", null, {
//   host: "127.0.0.1",
//   dialect: "mysql",
//   port: 3306,
//   logging: false,
// });

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  port: 5432,
  host: "127.0.0.1",

  logging: false,
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
