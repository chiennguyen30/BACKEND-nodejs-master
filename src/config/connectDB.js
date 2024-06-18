const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize("nvcit", "root", null, {
//   dialect: "mysql",
//   port: 3306,
//   host: "127.0.0.1",
//   logging: false,
// });

const dbURL = process.env.DB_URL;

const sequelize = new Sequelize(dbURL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    // Uncomment and use these options if your setup requires them
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  port: 5432, // Change to 5432 for PostgreSQL
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
