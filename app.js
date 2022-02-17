const express = require('express');
const fs = require('fs');
const app = express();


//create Server Instance
//Option 1
//Option 2
//const http = require('http');
//http.createServer(app).listen(5050);
//To set view Folder
//app.set('views','./location');



//registering  view engine
app.set('view engine','ejs');
//Setup static public folder
app.use(express.static('public'));


const date = new Date();

const days = ['Sunday','Monday', 'Thuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];



const dateObject = {
    today: days[date.getDay()],
    date: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear()
}

//Route
app.get('/',(req,res) => {
    console.log();
    res.render('index', dateObject);
});

//const server = app.listen((process.env.PORT || '5000'));
console.log("Calling app.listen().");

var server = app.listen((process.env.PORT || '5000'), function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at %s  %s', host, port);
});
console.log(server.address());
console.log("app.listen() executed.");

//Hello There
