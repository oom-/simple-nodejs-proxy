const dayjs = require("dayjs");
const http = require('http');
const httpProxy = require('http-proxy');

const PORT = 8888;
const proxy = httpProxy.createProxyServer({});

// Handle response from server
proxy.on('proxyRes', function (proxyRes, req, res) {
    /* --------------------- ALTER RESONSE FROM SERVER HERE --------------------- */
    let data = [];
    proxyRes.on("data", chunk => data.push(chunk));
    proxyRes.on("end", () => {
        res.end(data.toString()); //here return what you want like "hello": res.end("hello");
    })
});

//Create proxy server
http.createServer(function(req, res) {
    let now = Date.now();
  console.log(`[${dayjs(now).format("DD/MM/YYYY HH:mm:ss.SSS")}] [NewRequest]: `, req.method, req.url);
  /* ---------------------- ALTER REQUEST TO SERVER HERE ---------------------- */
  //Redirect req to server
  proxy.web(req, res, { target: `${req.url}`, selfHandleResponse : true });
}).listen(PORT, "127.0.0.1");
console.log(`Ready on port: ${PORT}`);
