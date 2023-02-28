const Environment = {
    DEV: 0,
    PROD: 1
};

const STATE = Environment.DEV;

class BSLog {
    static trace = (message) => {
        if(STATE === Environment.DEV) {
            console.log('[TRACE]:' + message);
        }
    }

    static info = (message) => {
        if(STATE === Environment.DEV) {
            console.log('[INFO]:' + message);
        }
    }


    static severe = (message) => {
        if(STATE === Environment.DEV) {
            console.log("=============================================");
            alert('[SEVERE]:' + message);
            console.log('[SEVERE]:' + message);
            console.log("=============================================");
        }
    }
}

export default BSLog;