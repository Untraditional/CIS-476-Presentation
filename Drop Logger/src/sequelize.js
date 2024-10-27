const { Sequelize } = require('sequelize');
require('dotenv').config();  // Make sure to load environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,  // Adjust if using strict SSL validation
      },
    },
  }
);

module.exports = sequelize;