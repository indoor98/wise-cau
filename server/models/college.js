const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const College = sequelize.define('college', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    college_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    score: { //점수
        type: Sequelize.FLOAT,
        allowNull: false
    },
    weight: { //가중치
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = College;