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
    perfects: { //만점자 수!!
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = College;