const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Drop = sequelize.define('Drop', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  monsterid: {
    type: DataTypes.INTEGER,
    references: {
      model: 'monsters',
      key: 'id',
    },
    allowNull: false,
  },
}, {
  tableName: 'drops',
  timestamps: false,
});

module.exports = Drop;
