const express = require('express');
const fs = require('fs');
const fetch = require("node-fetch");
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



fetchWorldTime();

async function fetchWorldTime(){
  await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam') //"http://worldtimeapi.org/api/timezone"
  .then(response => response.json())
  .then(obj => {
    copenhagenJson = obj;
  });
}
var copenhagenJson;




const dateObject = {
    today: days[date.getDay()],
    date: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear()
}
//<!--<%= today %>, <%= date %> <%= month %>  <%= new Date().getFullYear() %> -->
//Route
app.get('/',(req,res) => {
  let myServer = {
    port: server.address().port,
    host: server.address().address
  };
   

    res.render('index',myServer);
});
app.get('/getTimeList', (req,res) => {
    res.send(worldTimeList);
})


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
