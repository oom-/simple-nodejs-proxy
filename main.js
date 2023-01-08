const http = require('http');
const httpProxy = require('http-proxy');

const PORT = 8888;
const proxy = httpProxy.createProxyServer({});
http.createServer(function(req, res) {
  console.log('Request', req.method, req.url);
  proxy.web(req, res, { target: `${req.url}` });
}).listen(PORT, "127.0.0.1");
console.log(`Ready on port: ${PORT}`);
