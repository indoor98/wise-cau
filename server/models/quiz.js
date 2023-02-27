const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Quiz = sequelize.define('quiz', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    option1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    option2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    option3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    option4: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answer: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    solution: {
        type: Sequelize.TEXT
    },
    exposure: {
        type: Sequelize.INTEGER
    },
    correct: {
        type: Sequelize.INTEGER
    }

});

module.exports = Quiz;