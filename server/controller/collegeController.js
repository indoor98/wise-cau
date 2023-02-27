const College = require('../models/college');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

exports.increseScore = (req, res, next) => {




    const collegeId = req.body.collegeId;
    let score;
    College.findByPk(collegeId)
        .then(college => {
            score = college.score + college.weight;
            College.update({
                score: score 
            },{
                where: {
                    id: collegeId
                }
            });
            return res.json({message: "만점입니다."});
            })
        .catch(err => console.log(err));
};

exports.collegeRanking = (req, res, next) => {
    College.findAll({
        attributes: ['id', 'college_name', 'score'],
        order: [['score', 'DESC']]
    })
    .then( colleges => {
        return res.json({result: colleges});
    })
    .catch(err => console.log(err));
};

exports.collegeList = (req, res, next) => {
    College.findAll({
        attributes: ['id', 'college_name'],
        order: [['id', 'ASC']]
    })
    .then(colleges => {
        return res.json({result: colleges});
    })
    .catch(err => console.log(err));
};