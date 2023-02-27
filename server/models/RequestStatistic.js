const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const RequestStatistic = sequelize.define('RequestStatistic', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pathName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = RequestStatistic;