import styled from "styled-components";

const Box = styled.li`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color:${props => props.selected ? '#61dafb' : 'white'};
  width:81px;
  height:81px;
  list-style: none;
  margin:0;
  text-align: center;
  font-size:${props => props.fontSize}px;
  
  :hover {
    background-color: #61dafb;
  }
  & > img {
    margin-top:10px;
    width: 50px;
    height: 50px;
  }
  
`;
function CollegeItem(props) {

    let fontSize = 10;
    if(props.title.length === 4) {
        fontSize = 12;
    } else if(props.title.length === 6) {
        fontSize = 11;
    }

    return (
        <Box
            selected={props.selected}
            fontSize={fontSize}
            onClick={props.onClick}
            id={props.id}
        >
            {props.icon}
            <div style={{marginTop:5}}>
                {props.title}
            </div>
        </Box>
    );
}

export default CollegeItem;