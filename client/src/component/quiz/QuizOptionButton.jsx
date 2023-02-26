import styled from "styled-components";

const Button = styled.div`
  
  margin-top:10px;
  background-color: #ffffff;
  border:3px solid grey;
  border-radius: 15px;
  width: 250px;
  height:68px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  display: flex;
`
const ButtonMargin=styled.div`
  margin: auto 0;
`;
function QuizOptionButton(props){
    const {onClick,index,text,id}=props;

    return(

        <Button onClick={onClick} id={id}>
            <ButtonMargin>{index}. {text}</ButtonMargin>
        </Button>
    );

}

export default QuizOptionButton;
