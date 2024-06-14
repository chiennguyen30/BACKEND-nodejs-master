const { Sequelize } = require("sequelize");
require("dotenv").config();
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("nvcit", "root", null, {
  host: process.env.HOST,
  port: process.env.PORT || 3306,
  dialect: "mysql",

  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
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
