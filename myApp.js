var express = require('express');
var app = express();
require('dotenv').config()//use for question 6
let bodyParser = require('body-parser')//use for question 11

/*
1. Meet the Node console
https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/meet-the-node-console
--------------------------sol-----------------------------------------------
console.log("Hello World");
*/


// 2. Start a Working Express Server
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/start-a-working-express-server
// --------------------------sol-----------------------------------------------
// app.get("/", (req, res) => {
//     res.send("Hellp Express");
// });


// 3. Serve an HTML File
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/serve-an-html-file
// --------------------------sol-----------------------------------------------
// app.get("/"), (req, res) => {
//     res.sendFile(__dirname + /views/index.html);
// });


// 4. Serve Static Assets
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/serve-static-assets
// --------------------------sol-----------------------------------------------
// app.use(express.static(__dirname + '/public'));


// 5. Serve JSON on a Specific RoutePassed
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route
// --------------------------sol-----------------------------------------------
// app.get("/json", (req, res) => {
//   res.json({"message": "Hello json"});
// })


// 6. Use the .env File
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/use-the--env-file
// --------------------------sol-----------------------------------------------
// app.get("/json", (req, res) => {
//   if(process.env.MESSAGE_STYLE === 'uppercase') {
//     res.json ({"message": "HELLO JSON"})
//   } else {
//     res.json ({"message": "Hello json"})
//   }
// });


// 7. Implement a Root-Level Request Logger Middleware
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/implement-a-root-level-request-logger-middleware
// --------------------------sol-----------------------------------------------
// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.path + ' - ' + req.ip);
//   next();
// });


// 8. Chain Middleware to Create a Time ServerPassed
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server
// --------------------------sol-----------------------------------------------
// app.get('/now', (req, res) => {
//   req.time = new Date().toString();
//   next();
// } , (req, res) => {
//   res.json({'time' : req.time});
// });
// notice, the whole Chain function should be included in app.get function. Be sure there is no () appearing before ','


// 9. Get Route Parameter Input from the Client
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/get-route-parameter-input-from-the-client
// --------------------------sol-----------------------------------------------
// app.get('/word:echo', (req, res) => {
//   res.json({echo : req.params.word});
// });


// 10. Get Query Parameter Input from the ClientPassed
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client
// --------------------------sol-----------------------------------------------
// app.get('/name', (req, res) => {
//   let nameText = req.query.first + ' ' req.query.last;
//   res.json({name: nameText});
// })


// 11. Use body-parser to Parse POST Requests
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests
// --------------------------sol-----------------------------------------------
// app.use(bodyParser.urlencoded({extended: false}));


// 12. Get Data from POST Requests
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/get-data-from-post-requests
// --------------------------sol-----------------------------------------------
// app.post('/name', bodyParser.urlencoded({extended: false}), (req, res) => {
//   let nameInfo = req.body.first + " " + req.body.last;
//   res.json({ name : nameInfo});
// });











 module.exports = app;
