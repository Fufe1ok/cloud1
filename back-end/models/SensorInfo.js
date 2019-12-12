const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const SensorInfo = sequelize.define("sensor_info", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  value: {
    type: DataTypes.FLOAT
  },
  date: {
    type: DataTypes.DATE
  },
  coordinates: {
    type: DataTypes.STRING
  }
});

module.exports = SensorInfo;
