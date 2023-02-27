import styled from "styled-components";

const Wrapper = styled.div`
    padding:20px;
`;
const RequestStatisticItem = (props) => {

    var now = new Date();

// 현재시간
    var year = now.getFullYear();     // 연도
    var month = now.getMonth()+1;     // 월(+1해줘야됨)
    var day = now.getDate();          // 일
    var hours = now.getHours();       // 현재 시간
    var minutes = now.getMinutes();

    let stdYear = 2023;
    let stdMonth = 1;
    let stdDay = 28;
    let stdHours = 14;
    let stdMinutes = 0;

    let nowDate = new Date(year, month, day, hours, minutes);
    let stdDate = new Date(stdYear,stdMonth,stdDay,stdHours,stdMinutes);


    const date = now.getTime() - stdDate.getTime();
    const calcMinutes = Math.floor(date /1000 /60);


    return (
        <Wrapper>
            요청 주소 : /
            <br/>요청 횟수 : 1000
            <br/>
            분 당 요청 횟수: {Math.round(1000 / calcMinutes)}
        </Wrapper>
    );
}

export default RequestStatisticItem;