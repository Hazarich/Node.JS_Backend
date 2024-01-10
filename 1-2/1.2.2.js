function readHttpLikeInput() {
    let fs = require("fs");
    let res = "";
    let buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for (; ;) {
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) { break; /* windows */ }
        if (buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10)
                break;
            was10++;
        } else
            was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();
// вот эту функцию собственно надо написать
function parseTcpStringAsHttpRequest(string) {
    let newString = string.split(`\n`)

    let headerValueAndName = []
    for(let i = 0; i<newString.length; i++){
        headerValueAndName[i] = newString[i].split(`:`)
    }
    headerValueAndName = headerValueAndName.slice(1,headerValueAndName.length);
    const [method, uri, zalishok] = string.split(" ");
    const body = newString.slice(newString.length-1, newString.length);
    return {
        method: method,
        uri: uri + " " + zalishok,
        headers:headerValueAndName[0],//тут можна поставити будь-яке значення масиву, також можна зробити цикл і т.д.
        body:body,
    };
}
http = parseTcpStringAsHttpRequest(contents);
console.log(JSON.stringify(http, undefined, 2));