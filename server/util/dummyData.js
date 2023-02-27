const College = require('../models/college');
const Quiz = require('../models/quiz');

exports.quizDummy = (quizzesJSON) => {
    for(var i = 0; i<=66; i++){
        Quiz.create({
            title: quizzesJSON[i].title,
            option1: quizzesJSON[i].option1,
            option2: quizzesJSON[i].option2,
            option3: quizzesJSON[i].option3,
            option4: quizzesJSON[i].option4,
            answer: quizzesJSON[i].answer,
            solution: quizzesJSON[i].solution
        });
    };
};