const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const QuizStatistic = sequelize.define('QuizStatistic', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quizId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    correct: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

});

module.exports = QuizStatistic;