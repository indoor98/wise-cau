import styled from "styled-components";
import DefaultWrapper from "../../ui/DefaultWrapper";
import VerticalAlignCenterWrapper from "../../ui/VerticalAlignCenterWrapper";

const Wrapper = styled.div`
  width: 100px;
  height: 35px;
  background-color: lightgray;
  border-radius: 10px;
  margin: 7.5px 10px;
  color: black;
  font-size: 15px;
`

const NavigationItem = (props) => {

    return (
        <Wrapper onClick={props.onClick} id={props.id}>
            <VerticalAlignCenterWrapper>
                <DefaultWrapper>
                    <span>
                        {props.name}
                    </span>
                </DefaultWrapper>
            </VerticalAlignCenterWrapper>

        </Wrapper>);

}

export default NavigationItem;