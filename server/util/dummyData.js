const College = require('../models/college');
const Quiz = require('../models/quiz');

exports.collegeDummy = () => {
    College.create({
        college_name:"경영경제대학",
        score: 0,
        weight: 0.6
    });
    College.create({
        college_name:"공과대학",
        score: 0,
        weight: 0.9
    });
    College.create({
        college_name:"사회과학대학",
        score: 0,
        weight: 1
    });
    College.create({
        college_name:"인문대학",
        score: 0,
        weight: 1.1
    });
    College.create({
        college_name:"창의 ICT 공과대학",
        score: 0,
        weight: 1.3
    });
    College.create({
        college_name:"간호대학",
        score: 0,
        weight: 1.7
    });
    College.create({
        college_name:"소프트웨어대학",
        score: 0,
        weight: 2.1
    });
    College.create({
        college_name:"자연과학대학",
        score: 0,
        weight: 2.4
    });
    College.create({
        college_name:"사범대학",
        score: 0,
        weight: 2.8
    });
    College.create({
        college_name:"약학대학",
        score: 0,
        weight: 3.3
    });
    College.create({
        college_name:"예술대학",
        score: 0,
        weight: 4.2
    });
    College.create({
        college_name:"의과대학",
        score: 0,
        weight: 4.7
    });
};

exports.quizDummy = () => {
    for(var i = 1; i<=60; i++){
        Quiz.create({
            title: i+'번째 문제입니다.',
            option1: "op1",
            option2: "op2",
            option3: "op3",
            option4: "op4",
            answer: i % 4,
            solution: "desc"
        });
    };
};