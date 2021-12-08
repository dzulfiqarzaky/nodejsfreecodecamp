const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end(`welcome to our home page`)
    }
    if(req.url === '/about') {
        res.end(`this is our short history`)
    }
    res.end(
        `<h1>Oops!</h1>
        <p>You are on the wrong page</p>
        <a href="/">Go back<a>`
    )
})

server.listen(5000)