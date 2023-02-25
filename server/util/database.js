const Sequelize = require('sequelize');
const sequelize = new Sequelize('wise_cau', 'admin', 'wisecau1', {
    dialect: 'mysql',
    host: 'wisecaudb.c77bebzwxj1x.ap-northeast-2.rds.amazonaws.com'
});



module.exports = sequelize;
