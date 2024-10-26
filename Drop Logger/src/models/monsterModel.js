const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Monster = sequelize.define('Monster', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'monsters',
  timestamps: false,
});

module.exports = Monster;
