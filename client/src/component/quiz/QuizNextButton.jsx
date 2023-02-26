import styled from "styled-components";

const Quiz_Button = styled.button`
  width: 100px;
  height: 35px;
  margin: 8px;
  color: white;
  border: solid 2px #143365;
  border-radius: 10px;
  background-color: #143365;
  font-size: 15px;

  font-family: 'MICEGothic Bold', serif;
`

function QuizNextButton(props) {
    const {onNextButtonClick,onResultButtonClick,pageNum} = props;
    const isLastQuiz = pageNum===9;
    return (
        <Quiz_Button onClick={isLastQuiz? onResultButtonClick:onNextButtonClick}>
            {isLastQuiz? '결과 확인':'다음 문제'}
        </Quiz_Button>
    );
}

export default QuizNextButton;