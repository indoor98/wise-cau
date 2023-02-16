const College = require('../models/college');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

exports.incresePerfect = (req, res, next) => { 
    const collegeId = req.body.collegeId;
    College.findByPk(collegeId)
    .then(college => {
        college.perfects = college.perfects + 1;
        return res.json({message: "만점입니다."});
    })
    .catch(err => console.log(err));
};

exports.collegeRanking = (req, res, next) => {
    College.findAll({
        order: [['perfects', 'DESC']]
    })
    .then( colleges => {
        console.log(colleges);
        return res.json({result: colleges[0], resultsList: colleges});
    })
    .catch(err => console.log(err));
};

exports.collegeList = (req, res, next) => {
    College.findAll({
        order: [['college_name', 'ASC']]
    })
    .then(colleges => {
        console.log(colleges);
        return res.json({result: colleges});
    })
    .catch(err => console.log(err));
};