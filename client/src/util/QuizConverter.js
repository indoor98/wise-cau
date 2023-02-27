

class QuizConverter {
    static convert = (quizzes) => {
        return quizzes.map(quiz => {
           return {
               id: quiz.id,
               title: quiz.title,
               option: [
                   quiz.option1,
                   quiz.option2,
                   quiz.option3,
                   quiz.option4
               ],
               answer: quiz.answer,
               solution : quiz.solution
           }
        });
    }
}

export default QuizConverter;