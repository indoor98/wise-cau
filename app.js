// Node.js core modules
const path = require('path');
const http = require('http');

// express modules
const express = require('express');
const bodyParser = require('body-parser');

// sequelize 모듈을 이용한 데이터베이스 연결
const sequelize = require('./util/database');

const app = express(); // express 객체 생성
// 라우팅 모듈
const allRoutes = require('./routes/all');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'front', 'public')));

app.use(allRoutes);

sequelize
  .sync()
  .then(result => {
    console.log(result);
    app.listen(8000); // 8000번 포트 사용
  })
  .catch(err => {
    console.log(err);
  });