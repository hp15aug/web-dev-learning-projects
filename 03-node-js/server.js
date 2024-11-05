const express= require("express");

const app= express();

app.get("/", function(req, res){
    res.send("<h1>HOME PAGE</h1>");
})

app.listen(6000, function(){
    console.log("Server Started");
})