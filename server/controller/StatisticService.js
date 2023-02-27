
const RequestStatistic = require('../models/RequestStatistic');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const ApiStatistic = require ('../models/ApiStatistic');
const Quiz = require('../models/quiz');
const College = require("../models/college");

exports.addPathCount = (path) => {

    let count;
    const findStatistic = RequestStatistic.findOne({where: {pathName: path}})
        .then(result => {
            count = result.count + 1;

            RequestStatistic.update( {
                count:count
            }, {
                where: {
                    pathName: path
                }
            });

            return true;
        }).catch(err =>  {
            return false;
        });
};

exports.getRequestStatistic = (req,res,next) => {

    RequestStatistic.findAll()
        .then(result => {
            return res.json({result:result});
        }).catch(err =>  {
            return res.json(null);
        });
};

exports.addApiPathCount = (path) => {
    let count;
    const findStatistic = ApiStatistic.findOne({where: {pathName: path}})
        .then(result => {
            count = result.count + 1;

            ApiStatistic.update( {
                count:count
            }, {
                where: {
                    pathName: path
                }
            });

            return true;
        }).catch(err =>  {
            return false;
        });
};


exports.getApiStatistic = (req,res,next) => {

    ApiStatistic.findAll()
        .then(result => {
            return res.json({result:result});
        }).catch(err =>  {
        return res.json({result:null,message:'요청에 실패했습니다.'});
    });
}

exports.getQuizStatistic = (req,res,next) => {
/*
    College.findAll({
        attributes: ['id', 'college_name'],
        order: [['id', 'ASC']]
    })
        .then(colleges => {
            return res.json({result: colleges});
        })
        .catch(err => console.log(err));
*/
    Quiz.findAll( {
        attributes: ['id','title','exposure','correct']
    })
        .then(quizzes => {
            return res.json({result: quizzes});
        }).catch(error => {
            return res.json({result:null,message:'요청에 실패했습니다.'})
        }
    );
}

exports.addExposureToQuiz = (quizId) => {

    let exposure;
    Quiz.findByPk(quizId)
        .then(quiz => {
            exposure = quiz.exposure + 1;

            Quiz.update( {
                exposure: exposure
            },{
                where: {
                    id: quizId
                }
            });
        })
        .catch(error => {
                return null;
        }
        );
};

exports.addCorrectToQuiz = (quizId) => {

    let correct;

    Quiz.findByPk(quizId)
        .then(quiz => {
            correct = quiz.correct + 1;
            Quiz.update( {
                correct: correct
            },{
                where: {
                    id: quizId
                }
            });
        })
        .catch(error => {
            return null;
        });
};