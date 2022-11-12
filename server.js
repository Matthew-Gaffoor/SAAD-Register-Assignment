var http = require("http");
var url = require("url");

function start(handle, route) {
    function onRequest(request, response) {
        const baseURL =  request.protocol + '://' + request.headers.host + '/';
        const theURL = new URL(request.url, baseURL);
        var pathname = theURL.pathname;
        var query = theURL.query;
        var postData = "";
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received more data: "+ postDataChunk);
        });
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }
http.createServer(onRequest).listen(3000);
console.log("Server started");
}
exports.start = start;