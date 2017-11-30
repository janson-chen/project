const process = require("process");

const reqPath = (process.env.NODE_ENV=='dev') ? "/api" : "/yizhangtong/api/gp";


module.exports = {

    "reqPath": reqPath,
    "envOrigin": "https://test-toa-web-h5-stg1.pingan.com.cn:34943"

};