const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
const DATA_PUBLIC_PATH = path.normalize(__dirname + '/data/');
router.use(function timeLog(req, res, next) {
    console.log('[get requestTime]: ', Date.now());
    next()
});

router.get("/", function (req, res, next) {
    res.write("--------------------------------------");
    res.write("Express load success!");
    res.end("---------------------------------------");

    next();

});

router.get("/*", function (req, res, next) {
    console.log("[catch get action]:" + req.query['callback']);
    const callback = req.query['callback'];
    try {

        const resData = fs.readFileSync(path.normalize(DATA_PUBLIC_PATH + '/' + req.url.substring(0, req.url.indexOf("?")) + '.json'));
        res.end(callback + '(' + resData + ')');

    } catch (error) {

        console.error(error);
    }

    next();

});

router.post("/*", function (req, res, next) {
    console.log("[catch post action]:" + req.path + '\nreqbody:' + JSON.stringify(req.body));

    try {
        console.log('get post operationType', req.body.operationType);
        const file = path.normalize(DATA_PUBLIC_PATH + '/' + req.body.operationType + '.json');
        console.log('access file path', file);
        fs.exists(file, function(exists){
                if(exists){
                    const resData = fs.readFileSync(file, 'utf8');
                    console.log("response:", resData);
                    res.end(resData);

                }else{
                    console.log(file + " is not exist");
                }
        });

      
    } catch (error) {

        console.error(error);
    }

    next();

});

//request toString
function reqToString(req) {
    for (var key in req) {
        console.log(key, req[key]);
    }
}

//detail request

module.exports = router;
