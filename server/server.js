const express=  require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = require('./util/database');

const Quiz = require('./models/quiz');
const College = require('./models/college');

const collegeController = require('./controller/collegeController');
const quizController = require('./controller/quizController');

const app = express();

app.get('/api/quizzes', quizController.getTenQuizzes);
app.post('/api/results', collegeController.incresePerfect);
app.get('/api/ranking', collegeController.collegeRanking);
app.get('/api/colleges', collegeController.collegeList);

sequelize
  .sync()
  .then(result => {
    app.listen(8000, ()=>{console.log("Server started on port 8000")});
  });
  

