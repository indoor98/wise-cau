import styled from "styled-components";
import './RankItem.css'
import Medal from "./Medal";
const Wrapper = styled.div`
  width:250px;
  margin-bottom:7px;
`;
function RankItem(props) {

    const ranking = props.ranking;
    const stat = props.stat;

    const backgroundStyle = {
        'height': props.backgroundHeight[ranking],
        'width': props.backgroundWidth[ranking]
    };

    return (
        <Wrapper >
            <div className={'ranking__'+ranking}>
                <span className='ranking'>{ranking}등</span>
                <span> {stat.numberOfPerfectScore}명</span>
            </div>
            { ranking <= 3
                &&
                <div className='ranking__background'
                    style={backgroundStyle}
                />
            }
            <div className={'collegeName__'+ranking}>
                {ranking <= 3 && <Medal ranking={ranking}/>}
                {props.stat.collegeName}
            </div>
        </Wrapper>
    );
}

export default RankItem;