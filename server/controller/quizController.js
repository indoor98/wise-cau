const Quiz = require('../models/quiz');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const StatisticService = require('./StatisticService');


exports.getTenQuizzes = (req, res, next) => {

    req.session.status=true;

    StatisticService.addApiPathCount("/api/quizzes");

    Quiz.findAll({ order: Sequelize.literal('rand()'), limit: 10 })
        .then(quizzes => {
            return res.json({result: quizzes});
        })
        .catch(err => console.log(err));
};


