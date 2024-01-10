const express = require('express')
const app = express()
const port = 8080
const  fs = require(`fs`)

app.get('/', (req, res) => {

    const counter = fs.readFileSync(`counter.txt`);
    fs.writeFileSync("counter.txt",  String(Number(counter )+ 1));
    res.send(`Number of entering` +" - " + String(Number(counter)));

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})//Localhost:8080