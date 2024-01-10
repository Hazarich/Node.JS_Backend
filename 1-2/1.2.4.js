function outputHttpResponse(statusCode, statusMessage, contentType, headers, body) {
    return (`HTTP/1.1 ${statusCode} ${statusMessage}
Date: ${new Date()}
Server: Apache/2.2.14 (Win32)
Content-Length: ${body.length}
Connection: Closed
Content-Type: ${contentType}
login=${passwordAndLogin()[0]}&password=${passwordAndLogin()[1]}
${Object.entries(headers).map(([name, value]) => `${name}: ${value}`).join('\n')}
${body}`);
}

function processHttpRequest(method, uri, contentType, headers, body) {
    body = '<h1 style="color:green">FOUND</h1>';
    let regExp = /^\/api\/checkLoginAndPassword$/;

    if (passwordAndLogin()[1] === undefined && passwordAndLogin()[0] === "") {
        return outputHttpResponse(404, "not found", "not found", {}, "not found");
    } else if (!require("fs").existsSync("passwords.txt")) {
        return outputHttpResponse(500, "Internal Server Error", "not found", {}, "Internal Server Error");
    } else if (method === "POST" && regExp.test(uri) === true) {
        return outputHttpResponse(200, "OK", "OK", {}, body);
    } else if (uri.startsWith("/api/") === false) {
        return outputHttpResponse(404, "not found", "not found", {}, "not found");
    } else if (regExp.test(uri) === false) {
        return outputHttpResponse(400, "bad request", "bad request", {}, "bad request");
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
    const contentType = newString[2];
    const body = newString[newString.length - 1].trim(); // Extract the body

    return {
        method: method,
        uri: uri,
        contentType: contentType,
        headers: headerValueAndName,
        body: body,
    };
}

const http = parseTcpStringAsHttpRequest(`POST /api/checkLoginAndPassword HTTP/1.1
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/4.0
Content-Length: 35

login=student&password=12345`);
console.log(processHttpRequest(http.method, http.uri, http.contentType, http.headers, http.body));

function passwordAndLogin() {
    const fileContent = require("fs").readFileSync("passwords.txt");
    let result1 = fileContent.toString("utf-8").split("\n");
    let array = [];
    for (let i = 0; i < result1.length; i++) {
        array[i] = result1[i].split(":");
    }
    return array[0]; // Тут можна поставити будь-яке значення
}
