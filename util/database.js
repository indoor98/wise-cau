const Sequelize = require('sequelize');

// Sequelize('DB이름', 'mySQL 어드민', '비밀번호', { 설정 })
const sequelize = new Sequelize('wise_cau', 'root', 'wisecau', {
    dialect: 'mysql',
    host: '127.0.0.1'
});

module.exports = sequelize;