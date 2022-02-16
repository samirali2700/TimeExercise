const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();


//create Server Instance
//Option 1
const server = app.listen(5555);

//Option 2
//const http = require('http');
//http.createServer(app).listen(5050);



//registering  view engine
app.set('view engine','ejs');
//To set view Folder
//app.set('views','./location');

console.log(server.address());
//Setup static public folder
app.use(express.static('public'));

//Route
app.get('/',(req,res) => {
    
    res.render('index');
});

