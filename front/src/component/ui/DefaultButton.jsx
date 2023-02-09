import styled from "styled-components";

const Button = styled.button`
    width: 110px;
    height: 50px;
    margin: 15px;
    color: white;
    border: solid 2px #143365; 
    border-radius: 10px;
    background-color: #143365;
    font-size: 19px;
`
function DefaultButton(props) {
    const {onClick, title} = props;

    return (
        <Button onClick={onClick}>
            {title}
        </Button>
    );
}

export default DefaultButton;