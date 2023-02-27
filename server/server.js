const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = require('./util/database');
const path = require('path');
const Quiz = require('./models/quiz');
const College = require('./models/college');
const fs = require('fs');
const csvToJSON = require('./util/csvToJSON');
const StatisticService = require('./controller/StatisticService');

const collegeController = require('./controller/collegeController');
const quizController = require('./controller/quizController');
const errorController = require('./controller/errorController');
const BSLogger = require('./BSLogger')
const dummy = require('./util/dummyData');

const app = express();

/** Session */

let session = require('express-session');
let MySQLStore = require('express-mysql-session')(session);
let options = {
    host    : 'wisecaudb.c77bebzwxj1x.ap-northeast-2.rds.amazonaws.com',
    port    : 3306,
    user    : 'admin',
    password: 'wisecau1',
    database: 'wise_cau'
};
let sessionStore = new MySQLStore(options);

app.use(session({
    secret           : "asdfasffdas",
    resave           : false,
    saveUninitialized: true,
    store            : sessionStore
}));


app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

let accessTime = 0;
const pageUri = ['/','/select','/ranking','/result','/quiz'];

app.use(function (req, res, next) {
    if ((!req.session.status) && req.path === '/api/results') {
        return res.json({isSuccess: false, message: '유효하지 않은 요청입니다.'});
    }

    BSLogger.log(req);

    for(let i in pageUri) {
        if(req.path === pageUri[i]) {
            StatisticService.addPathCount(req.path);
            accessTime++;
        }
    }

    next();
});






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
app.get('/api/statistic/access', function (req, res, next) {
   return res.json({result:accessTime});
});

app.post('/api/statistic/quiz/exposure' , function (req,res,next) {
    StatisticService.addExposureToQuiz(req.body.quizId);
    return res.json({message:"정상적으로 수행됐습니다."});
});

app.post('/api/statistic/quiz/correct' , function (req,res,next) {
    StatisticService.addCorrectToQuiz(req.body.quizId);
    return res.json({message:"정상적으로 수행됐습니다."});
})

app.get('/api/statistic/request' , function(req,res,next) {
    StatisticService.getRequestStatistic(req,res,next);
}) ;

app.get('/api/statistic/api', StatisticService.getApiStatistic);
app.post("/api/statistic/request", function (req,res,next) {
    const isSuccess = StatisticService.addPathCount(req.body.path);
    return res.json({message:isSuccess ? "요청에 성공하였습니다." : "요청에 실패했습니다."});
});

app.use(express.static(path.join(__dirname, '../client/build')));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// 사용자가 아무 url을 입력하면("*") 리액트 HTML을 보내라

app.use(errorController.get404);


sequelize
    .sync()
    .then(result => {
        return result;
    })
    .then(result => {
        app.listen(8000, () => {
            console.log("Server started on port 8000")
        });
    });
  
