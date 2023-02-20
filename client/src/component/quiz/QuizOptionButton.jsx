import styled from "styled-components";

const Button = styled.div`
  
  margin-top:10px;
  background-color: #ffffff;
  border:1px solid grey;
  border-radius: 5px;
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
    const {onClick,index,text}=props;

    return(

        <Button onClick={onClick}>
            <ButtonMargin>{index}. {text}</ButtonMargin>
        </Button>
    );

}

export default QuizOptionButton;
