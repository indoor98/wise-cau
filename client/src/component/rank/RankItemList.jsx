import styled from "styled-components";
import RankItem from "./RankItem";

const Wrapper = styled.div`

`;
function RankItemList(props) {

    const rankingData = props.rankingData;

    /** RankItem 배경의 Width를 구하는 메서드, 1등을 250으로 fix 한 후 나머지를 상대적으로 조정 */
    const calculateBackgroundWidth = () => {
        const backgroundWidth = [0, 250];
        for(let i=1; i<3; i++) {
            backgroundWidth.push(250 * rankingData[i].numberOfPerfectScore / rankingData[0].numberOfPerfectScore);
        }
        return backgroundWidth;
    };

    const backgroundWidth = calculateBackgroundWidth();
    const backgroundHeight = [0,32,30,27];

    return (
      <div>
          {rankingData.map((stat,index)=> {
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