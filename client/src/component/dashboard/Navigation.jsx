import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width:1160px;
  height:50px;
  background-color:white;
  margin-top:20px;
  border-radius:15px;
`

const navigationItems = [
    '주소 요청 현황',
    '문제 통계'
]
const Navigation = (props) => {

    const navigationItemClickHandler = (event) => {
        props.setCurrentNavigation(event.currentTarget.id);
        console.log(event.currentTarget.id);
    }


    return (
        <Wrapper>
            {navigationItems.map((navigationItem,index) => {
                return <NavigationItem
                    onClick = {navigationItemClickHandler}
                    name={navigationItem}
                    key={index}
                    id={index}
                />
            })}
        </Wrapper>
    )
}

export default Navigation;