const express =  require('express');
const router =require('./route');
const app = express();
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const config = require('./config/config');
const path = require('path');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//允许跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//配置要写到路由上面 代理
// app.use('/yizhangtong/*' , proxy(config.envOrigin , {
//     'https': true,
//     'timeout': 5000,
//     filter: function(req, res) {
//         return req.method.toLowerCase() == 'post';
//     },

//     decorateRequest: function(proxyReq) {
//         // you can update headers
//         proxyReq.headers['content-type'] = 'application/x-www-form-urlencoded';
//         proxyReq.headers['origin'] = config.envOrigin;
//         console.log("[proxyReq path]"+proxyReq.path);
//         return proxyReq;
//     },
//     intercept: function(rsp, data, req, res, callback) {
//         console.log(req.path);
//         console.log("response:\n" + data.toString());
//         callback(null , data);
//         res.end();
//     },
//     forwardPath: function(req) {
//         return path.normalize(config.reqPath) +'?operationType='+req.body.operationType + '&requestData='+req.body.requestData;
//     }

// }));

//mok
app.use('/' , router);
app.use('/static' , express.static(path.resolve(__dirname  ,  '../static')));

//监听端口
app.listen(80);

//setTimeout(function () {
//    require('opn')('http://127.0.0.1:3000/static/pages/index.html');
//
//} , 1000);



