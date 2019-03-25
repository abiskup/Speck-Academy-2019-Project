var vri= newDate ()
var halls = ['hall1', 'hall2', 'hall3', 'hall4', 'hall5'];
var hall1 = {
id:1,
name: 'DvoranaGlavna',
reservation : {
isReserved:new Boolean(true),
reservedFrom:newDate(2019,06,27),
reservedUntil:newDate(2019,06,29),
}
}

var hall2 = {
   id:2,
   name: 'DvoranaSporedna',
   reservation : {
   isReserved:new Boolean(true),
   reservedFrom:newDate(2019,06,17),
   reservedUntil:newDate(2019,06,23),
   }
   }

   var hall3 = {
       id:3,
       name: 'DvoranaSkolska',
       reservation : {
       isReserved:new Boolean(false),
       reservedFrom:null,
       reservedUntil:null,
       }
       }

       var hall4 = {
           id:4,
           name: 'DvoranaKoncertna',
           reservation : {
           isReserved:new Boolean(false),
           reservedFrom:null,
           reservedUntil:null,
           }
           }

           var hall5 = {
               id:5,
               name: 'DvoranaMala',
               reservation : {
               isReserved:new Boolean(false),
               reservedFrom:null,
               reservedUntil:null,
               }
               }


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World\n');
});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});

//task 4
halls.push(hall1, hall2, hall3, hall4, hall5);
var hallName = [];
hallName.push(hall1.name, hall2.name, hall3.name, hall4.name, hall5.name);
console.log(hallName);

//task 5
var hallNameString = hallName.toString();
console.log(hallNameString);

//task 6
var http = require('http');

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(hallNameString);
}).listen(8080);

console.log('Server started');