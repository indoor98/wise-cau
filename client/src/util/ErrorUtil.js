
class ErrorUtil {

    static NETWORK_ERROR = () => {
        return {
            isError: true,
            message: '네트워크 에러가 발생했습니다.'
        };
    }

    static OK = () => {
        return {
            isError: false,
            message: null
        };
    }
}

export default ErrorUtil;