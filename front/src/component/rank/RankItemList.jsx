import styled from "styled-components";
import RankItem from "./RankItem";

const Wrapper = styled.div`

`;
function RankItemList() {

    const testData = [
        {
            'collegeName':'경영경제대학',
            'numberOfPerfectScore': 1200,
        },
        {
            'collegeName':'소프트웨어대학',
            'numberOfPerfectScore': 300,
        },
        {
            'collegeName':'사회과학대학',
            'numberOfPerfectScore': 200,
        },
        {
            'collegeName':'자연과학대학',
            'numberOfPerfectScore': 125,
        },
        {
            'collegeName':'인문대학',
            'numberOfPerfectScore': 62,
        },
        {
            'collegeName':'공과대학',
            'numberOfPerfectScore': 30,
        },
        {
            'collegeName':'간호적십자대학',
            'numberOfPerfectScore': 25,
        },
        {
            'collegeName':'의과대학',
            'numberOfPerfectScore': 20,
        },
        {
            'collegeName':'약학대학',
            'numberOfPerfectScore': 19,
        },
        {
            'collegeName':'예술대학',
            'numberOfPerfectScore': 15,
        },
        {
            'collegeName':'사범대학',
            'numberOfPerfectScore': 13,
        },
        {
            'collegeName':'창의ICT공과대학',
            'numberOfPerfectScore': 0,
        },
    ];


    /** RankItem 배경의 Width를 구하는 메서드, 1등을 250으로 fix 한 후 나머지를 상대적으로 조정 */
    const calculateBackgroundWidth = () => {
        const backgroundWidth = [0, 250];
        for(let i=1; i<3; i++) {
            backgroundWidth.push(250 * testData[i].numberOfPerfectScore / testData[0].numberOfPerfectScore);
        }
        return backgroundWidth;
    };

    const backgroundWidth = calculateBackgroundWidth();
    const backgroundHeight = [0,32,30,27];

    return (
      <div>
          {testData.map((stat,index)=> {
              return (
                <RankItem
                    key={index}
                    backgroundWidth={backgroundWidth}
                    backgroundHeight={backgroundHeight}
                    ranking={index+1}
                    stat={stat}
                />
              );
          })}
      </div>
    );
}

export default RankItemList;