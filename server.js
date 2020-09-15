'use strict';
const PORT = 8080;
const ADDRESS = '0.0.0.0';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.post('/process_post', urlencodedParser, function (req, res) {
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
response.result = eval(req.body.math_equation);
   console.log(response);
   res.end(JSON.stringify(response));
})
app.listen(PORT,ADDRESS);
