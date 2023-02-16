const Sequelize = require('sequelize');
const sequelize = new Sequelize('wise_cau', 'root', 'wisecau', {
    dialect: 'mysql',
    host: '127.0.0.1'
});

module.exports = sequelize;
