const express = require("express");
const request= require("request");
const bodyParser= require("body-parser");
const https= require("https");

const app= express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true})); 

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html")
});

app.post("/", function(req,res){
    var f_name= req.body.f_name;
    var l_name= req.body.l_name;
    var email= req.body.email;
    
    const data={
        members:[
            {
        email_address: email, 
        status: "Subscribed",
        merge_fields:{
            FNAME: f_name,
            LNAME: l_name
        }

    }]};
    const JSONdata= JSON.stringify(data);

    const url= "https://us21.api.mailchimp.com/3.0/lists/2926912887";

    const option= {
        method:"POST",
        auth: "burn:99ac1d8906e8717c5632377c5e15f21a-us21"
    }

    const request = https.request(url, option, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(JSONdata);
    request.end();
    
})

app.listen("3000", function(){
    console.log("Server started in port in 3000");
})

// API KEY
// 99ac1d8906e8717c5632377c5e15f21a-us21

// List Id
// 2926912887
 
// URL
// https://us21.api.mailchimp.com/3.0/lists/2926912887