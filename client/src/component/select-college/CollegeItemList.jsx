import styled from "styled-components";
import CollegeItem from "./CollegeItem";

const Wrapper = styled.ul`
  margin-right:0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-collapse: collapse;
  width: 250px;
  padding: 0;

  &, & > li {
    border-style: solid;
    border-color: #143365
  }

  & { border-width: 2px 0 0 2px}

  & > li {
    border-width:  0  2px 2px  0
  }
`

const iconList = [
    0,
    <img src="https://cdn-icons-png.flaticon.com/512/9536/9536166.png" alt="인문대학"/>,
    <img src='https://cdn-icons-png.flaticon.com/512/9480/9480178.png' alt='사회과학대학' />,
    <img src='https://cdn-icons-png.flaticon.com/512/991/991922.png' alt='사범대학'/>,
    <img src="https://cdn-icons-png.flaticon.com/512/1962/1962604.png" alt="자연과학대학"/>,
    <img src='https://cdn-icons-png.flaticon.com/512/3079/3079165.png' alt='공과대학'/>,
    <img src="https://cdn-icons-png.flaticon.com/512/2432/2432572.png" alt="창의ICT공과대학"/>,
    <img src='https://cdn-icons-png.flaticon.com/512/1988/1988030.png' alt='소프트웨어대학'/>,
    <img src="https://cdn-icons-png.flaticon.com/512/3310/3310764.png" alt="경영경제대학"/>,
    <img src="https://cdn-icons-png.flaticon.com/512/1839/1839379.png" alt="의과대학"/>,
    <img src="https://cdn-icons-png.flaticon.com/512/883/883407.png" alt="약학대학"/>,
    <img src="https://cdn-icons-png.flaticon.com/512/5897/5897468.png" alt="간호대학"/>,
    <img src="https://cdn-icons-png.flaticon.com/512/264/264742.png" alt="예술대학"/>,
];

function CollegeItemList(props) {
    const items = props.items;

    const selectClickHandler = (event) => {
        props.onSelectCollegeHandler(event.currentTarget.id);
    }

    return (
        <Wrapper>
            {items.map(college=> {
                return (
                <CollegeItem
                    key={college.id}
                    title={college.college_name}
                    id={college.id}
                    onClick={selectClickHandler}
                    icon={iconList[college.id]}
                    selected={props.selectedCollegeId == college.id}
                />
                );
            })}
        </Wrapper>
    );
}

export default CollegeItemList;