const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/codeial");

const connection=mongoose.connection;

connection.on("error",function(err){
    if(err){
        console.log(err);
    }
})

connection.once("open",function(){
    console.log("Database connected")
})

