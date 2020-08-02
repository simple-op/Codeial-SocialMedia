const express=require("express");
const mongoose=require("./config/mongoose");
const router = require("./routes");
const ejs=require("ejs");
const app=express();
const port=8000;
const path=require("path");
app.use(express.urlencoded());


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));


app.use(express.static('assets'));

app.listen(port,function(){
     
  console.log(`Server Running on ${port}`);
})

app.use(router);