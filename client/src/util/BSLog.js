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

    static trace = (func, message) => {
        if(STATE === Environment.DEV) {
            console.log('[TRACE]: ' + func+' '+message);
        }
    }

    static info = (message) => {
        if(STATE === Environment.DEV) {
            console.log('[INFO]:' + message);
        }
    }

    static info = (func, message) => {
        if(STATE === Environment.DEV) {
            console.log('[INFO]: ' + func+' '+message);
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

    static  = (func, message) => {
        if (STATE === Environment.DEV) {
            console.log("=============================================");
            alert('[SEVERE]:' + message);
            console.log('[SEVERE]: ' + func + ' ' + message);
            console.log("=============================================");
        }
    }
}

export default BSLog;