const Sequelize = require('sequelize');
const sequelize = new Sequelize('wise_cau', 'root', '00000000', {
    dialect: 'mysql',
    host: '127.0.0.1'
});



module.exports = sequelize;
