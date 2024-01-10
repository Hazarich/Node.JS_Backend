function outputHttpResponse(statusCode, statusMessage, headers, body) {

    return (`HTTP/1.1 ${statusCode} ${statusMessage}
Date: ${new Date()}
Server: Apache/2.2.14 (Win32)
Content-Length: ${body.length}
Connection: Closed
Content-Type: text/html; charset=utf-8

${body}`)
}

function processHttpRequest(method, uri, headers, body) {
    let regExp4 = /\?nums/gi
    let regExp2 = /[0-9]/gi
    let regExp = /^\/sum\?nums=\d+(?:,\d+)*$/
    if  (method === "GET" && regExp.test(uri)){
        let r = uri.match(regExp2)
        let res = r.map(Number);
        let body = res.reduce((a, b) => a + b, 0);
        return  outputHttpResponse(200, "OK", {}, body)
    }
    else if(uri.startsWith("/sum?nums=") === false){
        return  outputHttpResponse(404, "not found", {}, "not found")
    }
    else if(uri.test(regExp4) === false){
        return outputHttpResponse(400, "bad request", {}, "bad request")
    }

}
function parseTcpStringAsHttpRequest(string) {
    let newString = string.split('\n');
    let headerValueAndName = [];

    for (let i = 0; i < newString.length; i++) {
        headerValueAndName[i] = newString[i].split(":");
    }

    headerValueAndName = headerValueAndName.slice(1, headerValueAndName.length);
    const [method, uri] = newString[0].split(" ");
    const body = newString[newString.length - 1];
    return {
        method: method,
        uri: uri,
        headers: headerValueAndName,
        body: body,
    };
}


const http = parseTcpStringAsHttpRequest("GET /sum?nums=1,2,3\nHost: example.com\nContent-Length: 0\n\n");
console.log(processHttpRequest(http.method, http.uri, http.headers, http.body));