const express = require('express')
const app = express()
const fs = require('fs')


app.get('/', (req, res) => {
    return res.send('Hello World!');
})

app.post('/heartbeat', (req, res) => {
    var body = '';
    filePath = __dirname + '/data.txt';
    req.on('data', function(data) {
        body += data;
    });

    req.on('end', function (){
        fs.appendFile(filePath,body, function() {
            res.end();
        });
    });
    res.status(200);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))