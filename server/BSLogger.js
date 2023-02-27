

class BSLogger {

    static IGNORE_PATH_LIST=['/static','/manifest','/favicon','/logo','/api/statistic'];
    static log(req) {


        for(let i in this.IGNORE_PATH_LIST) {
            if(req.path.startsWith(this.IGNORE_PATH_LIST[i]))
                return;
        }


        console.log('[SYSTEM]'+ ' PATH : '+req.path +' TIME:'+new Date().toLocaleString());
    }
}

module.exports=BSLogger;