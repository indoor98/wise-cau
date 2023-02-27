const StatisticService = require("./StatisticService");
exports.get404 = (req, res, next) => {

    StatisticService.addApiPathCount("/api/etc");

    res.status(404).json({
        "isSuccess": false,
	    "message" : "잘못된 페이지 요청입니다",
	    "result": null
    })};
