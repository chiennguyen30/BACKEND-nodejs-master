const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize("nvcit", "root", null, {
//   dialect: "mysql",
//   port: 3306,
//   host: "127.0.0.1",
//   logging: false,
// });

// Lấy thông tin từ biến môi trường
const dbURL = process.env.DB_URL;

const sequelize = new Sequelize(dbURL, "root", null, {
  dialect: "postgres", //connect db bang store postgres tren vercel
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
