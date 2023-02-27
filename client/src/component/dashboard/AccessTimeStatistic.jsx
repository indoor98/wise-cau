import styled from "styled-components";
import DefaultWrapper from "../ui/DefaultWrapper";
import VerticalAlignCenterWrapper from "../ui/VerticalAlignCenterWrapper";
import axios from "axios";
import {useEffect, useState} from "react";
import Loader from "../ui/Loader";

const Wrapper = styled.div`
  width: 1150px;
  height: 675px;
  background-color: white;
  border-radius: 15px;
  margin-top:20px;
`;

const AccessTimeSection = () => {
    const [accessTime, setAccessTime] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
        axios.get("/api/statistic/access")
            .then(response => {
                setAccessTime(response.data.result);
                setIsLoading(false);
            });
    },[]);

    const content = isLoading ? <Loader/> :
        <>
            <p style={{fontSize:30}}>접속횟수</p>
            <h1 style={{fontSize:90}}>
                {accessTime}회
            </h1>
        </>

    return (
        <DefaultWrapper>
            {content}
        </DefaultWrapper>
    )
}

const AccessTimeStatistic = () => {
  return (
      <Wrapper>
          <VerticalAlignCenterWrapper>
              <DefaultWrapper>
                  <AccessTimeSection/>
              </DefaultWrapper>
          </VerticalAlignCenterWrapper>
      </Wrapper>
  );

}

export default AccessTimeStatistic;