const db = require('../util/database');

module.exports = class quiz {
    constructor(id, title, option1, option2, option3, option4, answer, solution) {
        this.id = id;
        this.title = title;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.answer = answer;
        this.solution = solution;
    }
    // 10문제 뽑는 함수
    static fetchTen() {
        return db.execute('SELECT * FROM quizzes ORDER BY RAND()');
    }
};