var http = require('http')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var persons = []

app.post('/person',(req,res)=>{
    persons.push(req.body)
    res.json(req.body)
})


app.get('/person',(req,res)=>{
    res,json(persons)
})




http.createServer(app).listen(8000,()=>{
    console.log('Server is running on port 8000')
})