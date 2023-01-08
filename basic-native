const http = require('http');
const dayjs = require("dayjs");
const fetch = require("node-fetch");

const PORT = 8889;

//Create proxy server
http.createServer(async function (req, res) {
    let now = Date.now();
    console.log(`[${dayjs(now).format("DD/MM/YYYY HH:mm:ss.SSS")}]: `, req.method, req.url);
    switch (req.method) {
        case "GET":
            let response = await fetch(req.url, { headers: req.headers });
            let text = await response.json();
            res.end(JSON.stringify(text));
            break;
        default:
            res.end("Unsupported HTTP method")
            break;
    }
}).listen(PORT, "127.0.0.1");
console.log(`Basic proxy ready on port: ${PORT}`);
