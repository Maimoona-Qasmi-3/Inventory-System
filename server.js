const express = require('express');
const ejs = require('ejs');
const app =  express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get("/", function(req , res) {
  res.render('index');
});
app.get("/about", function(req, res){
  res.render('invent');
});
app.get("/product", function(req, res){
  res.render('product')
});
app.post("/", function(req, res) {
  res.send("No for public use")
});
app.listen(2500, function() {
  console.log("Your Server has started running");
});
