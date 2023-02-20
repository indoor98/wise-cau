import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  font-size: 12px;
  margin-top: 20px;
`;
function PointInformation(props) {
    const {isOpen, toggle} = props;

    return (
        <Wrapper>
            <div onClick={toggle}>
                ※포인트 집계 방식 {isOpen  ? '△':'▽'}
            </div>
            {isOpen &&
                <p>
                    포인트 = 단과대 별 만점자 수
                    <br/>&times; (1 / 2023 단과대 별 신입생 수)
                    <br/>&times; 400
                </p>
            }
        </Wrapper>
    );
}

export default PointInformation;