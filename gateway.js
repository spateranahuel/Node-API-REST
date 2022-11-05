const http = require('http');

var data = {
  userId: 0,
  email: "juan@gmail.com"
}
/*
const options = 
{
    hostname: 'localhost',
    port: 8080,
    path:'/api/reserva/?branchId=1&userId=0',
    method:'GET',
};*/

const options = 
{
    hostname: 'localhost',
    port: 8080,
    path:'/api/sucursales',
    method:'GET',
};


const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    let body = [];
    res.on('data', (chunk) => {
      body.push(chunk);
    });
    res.on('end', () => {
      if(res.statusCode == 200)
        console.log(JSON.parse(body))
      else{
        console.log(res.statusCode)
        console.log(body)
      }
      
    });
});

//req.write(JSON.stringify(data));
req.end();