const express=  require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = require('./util/database');
const path = require('path');
const Quiz = require('./models/quiz');
const College = require('./models/college');

const collegeController = require('./controller/collegeController');
const quizController = require('./controller/quizController');
const errorController = require('./controller/errorController');

const dummy = require('./util/dummyData');

const app = express();


app.use(express.static(path.join(__dirname, '../client/build')));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* 에러 발생함
//api
app.use('/', (res, req, next) => {
  console.log(res);
})
*/
app.get('/api/quizzes', quizController.getTenQuizzes);
app.post('/api/results', collegeController.increseScore);
app.get('/api/ranking', collegeController.collegeRanking);
app.get('/api/colleges', collegeController.collegeList);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// 사용자가 아무 url을 입력하면("*") 리액트 HTML을 보내라



app.use(errorController.get404);



sequelize
  .sync()
  .then(result => {
    // 테스트용 더미데이터 생성코드 한번만 실행해주시면 될 것 같습니다.
    // dummy.collegeDummy();
    // dummy.quizDummy();
    return result;
  })
  .then(result => {
    app.listen(8000, ()=>{console.log("Server started on port 8000")});
  });
  
