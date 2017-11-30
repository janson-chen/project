//访问测试开发环境
const http = require("http");

var postData = JSON.stringify({
        operationType:'admsAppLayoutInfo',
        requestData:JSON.stringify(
            [
                {
                    "osType": "3",
                    "appVersion":"4.9.9.1"
                },
                {
                    "pluginList": [
                        {
                            "pluginName": "wed",
                            "pluginVersion": 2,
                            "key": ""
                        }

                    ]

                }
            ]

        )
}

);


var options = {
    hostname: '0.0.0.0',
    port: 3111,
    path: '/yizhangtong/api/gp',
    method: 'post',
    headers: {
        'content-type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)

    }

};

var req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: + ${chunk}`);
    });
    res.on('error', (data) => {
        console.error(data);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });

});


// write data to request body
req.write(
    postData
);

req.end();

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});


