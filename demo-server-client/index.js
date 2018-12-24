
const express = require('express')
const app = express()


//CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept');

    next();
}

app.use(allowCrossDomain);


app.get('/api/helloworld', (req, res) => {
    res.json({sayHi: 'hello from server, nice to meet you!'})
})
app.listen(5000, () => {
    console.log('App listening on port 5000')
})
