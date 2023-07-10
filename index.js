const express = require('express')
const app = express()
const os = require('os');
app.disable("x-powered-by");
app.get('/', function (req, res) {
    res.send('Hello World from host ' + os.hostname() + '!')
})

app.listen(3000, function() {
    console.log('Hello world app listgening on port 3000!')
})
