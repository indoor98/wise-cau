const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = require('./util/database');
const path = require('path');
const Quiz = require('./models/quiz');
const College = require('./models/college');
const fs = require('fs');

const collegeController = require('./controller/collegeController');
const quizController = require('./controller/quizController');
const errorController = require('./controller/errorController');
const BSLogger = require('./BSLogger')
const dummy = require('./util/dummyData');

const app = express();

/** Session */

let session = require('express-session');
let MySQLStore = require('express-mysql-session')(session);
let options ={
host: 'wisecaudb.c77bebzwxj1x.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'wisecau1',
    database: 'wise_cau'
};
let sessionStore = new MySQLStore(options);

app.use(session({
secret:"asdfasffdas",
    resave:false,
    saveUninitialized:true,
    store: sessionStore
}));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    console.log('sessionStatus:' + req.session.status);
    if((!req.session.status ) && req.path === '/api/results') {
        return res.json({isSuccess:false, message:'유효하지 않은 요청입니다.'});
    }

   BSLogger.log(req);
    next();
});

// 퀴즈 데이터 생성코드(삭제 예정)
function csvToJSON(csv_string){

  // 1. 문자열을 줄바꿈으로 구분 => 배열에 저장
  const rows = csv_string.split("\r\n");
  
  // 줄바꿈을 \n으로만 구분해야하는 경우, 아래 코드 사용
  // const rows = csv_string.split("\n");


  // 2. 빈 배열 생성: CSV의 각 행을 담을 JSON 객체임
  const jsonArray = [];


  // 3. 제목 행 추출 후, 콤마로 구분 => 배열에 저장
  const header = rows[0].split(",");


  // 4. 내용 행 전체를 객체로 만들어, jsonArray에 담기
  for(let i = 1; i < rows.length; i++){

      // 빈 객체 생성: 각 내용 행을 객체로 만들어 담아둘 객체임
      let obj = {};

      // 각 내용 행을 콤마로 구분
      let row = rows[i].split(",");

      // 각 내용행을 {제목1:내용1, 제목2:내용2, ...} 형태의 객체로 생성
      for(let j=0; j < header.length; j++){
          obj[header[j]] = row[j];
      }

      // 각 내용 행의 객체를 jsonArray배열에 담기
      jsonArray.push(obj);

  }
  
  // 5. 완성된 JSON 객체 배열 반환
  return jsonArray;

  // 문자열 형태의 JSON으로 반환할 경우, 아래 코드 사용
  // return JSON.stringify(jsonArray);
}
const csvPath = path.join(__dirname, 'quizzes.csv');
const csv = fs.readFileSync(csvPath, 'utf-8');
quizzesJSON = csvToJSON(csv);



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
    dummy.quizDummy(quizzesJSON);
    return result;
  })
  .then(result => {
    app.listen(8000, ()=>{console.log("Server started on port 8000")});
  });
  
