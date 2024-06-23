const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize("nvcit", "root", null, {
//   dialect: "mysql",
//   port: 3306,
//   host: "127.0.0.1",
//   logging: false,
// });

const dbURL = process.env.DB_URL;

const sequelize = new Sequelize("nvcit_j4e9", "root", "ztZfoGza5R2CiwogKOGHFcpf28I0tVto", {
  host: "dpg-cprvp02j1k6c738eu2fg-a.singapore-postgres.render.com",
  dialect: "postgres",
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
