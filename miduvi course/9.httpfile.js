const http = require('node:http') 

const server = http.createServer((req,res) => {
console.log('request received')
res.end('hola mundo everyone fuck ')

})

server.listen(0, () => {

console.log(`server listening on port http://localhost:${server.address().port}`)

})