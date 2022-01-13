var http = require('http');

http.createServer((req,res)=>{
    res.end();
}).listen(8000,()=>{
    console.log('Server is running on port 8000')
})