
import styled from "styled-components";

const FirstLetter = styled.span`
    color: #143365;
`

function MainTitleItem(props) {
    const {content} = props;

    const firstLetter = content.substr(0,1); 
    const lastLetters = content.substr(1,content.length);

    return (
        <div><FirstLetter>{firstLetter}</FirstLetter>{lastLetters}</div>
    )
}

export default MainTitleItem;