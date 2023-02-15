const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Perfect = sequelize.define('perfect', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    college: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numOfPerfect: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Perfect;