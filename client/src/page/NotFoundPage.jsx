import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import DefaultWrapper from "../component/ui/DefaultWrapper";
import Puang from '../푸앙_절규.png';
import ButtonGroup from "../component/ui/ButtonGroup";
import DefaultButton from "../component/ui/DefaultButton";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function NotFoundPage() {

    const navigate = useNavigate();
    axios.post("/api/statistic/request",{path:'/etc'});

    const homeClickHandler = () => {
        axios.post("/api/statistic/request",{path:'/'});
        navigate('/');
    }

    return (
        <VerticalAlignCenterWrapper>
            <DefaultWrapper>
                <h1>404 Error</h1>
                <img style={{width:250,height:250}} src={Puang} alt="푸앙_절규"/>
                <p>
                    요청하신 페이지를 찾을 수 없습니다.
                </p>
                <ButtonGroup >
                    <DefaultButton 
                        title='메인 화면'
                        onClick={homeClickHandler}
                    />
                </ButtonGroup>
            </DefaultWrapper>
        </VerticalAlignCenterWrapper>
    );
}

export default NotFoundPage;