var express = require('express');
var todocontroller = require('./controllers/todoController');
var app=express();
app.set('view engine','ejs');
app.use(express.static('/assets/style.css'));
todocontroller(app);
app.listen(3000);
console.log("listen 3000");