const https = require('http');
const port = process.env.PORT || 3000 ;
const server = https.createServer((req , res)=>{
    res.statusCode = 200 ;
    res.setheader('Content-type','text/html');
    res.end('<h1> this is code with harry tutorial learing </h1> <p1> hey this is the way o rock and shock the world! </p1> ' );
})
server.listen(port,()=>{
    console.log(`server is listning to the ${port}`)
})