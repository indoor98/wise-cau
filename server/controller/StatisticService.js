
const RequestStatistic = require('../models/RequestStatistic');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

exports.addPathCount = (req, res, next) => {

    let count;
    const findStatistic = RequestStatistic.findOne({where: {pathName: req.body.path}})
        .then(result => {
            count = result.count + 1;

            RequestStatistic.update( {
                count:count
            }, {
                where: {
                    pathName: req.body.path
                }
            });

            return res.json({message:"정상적으로 처리되었습니다."});
        }).catch(err => console.log(err));
};