
const RequestStatistic = require('../models/RequestStatistic');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const ApiStatistic = require ('../models/ApiStatistic');

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
        return res.json(null);
    });
}