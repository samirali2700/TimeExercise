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




//Route
app.get('/',(req,res) => {
    res.render('index');
});

const server = app.listen((process.env.PORT || '5000'));