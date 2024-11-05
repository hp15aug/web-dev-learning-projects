const { log } = require("console");
const express = require("express");
const https = require("https");
const bodyParser= require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    const query=req.body.cityName;
    const apiKey="0fd990b79d2972ed20f5d56a0f527cb3";
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey;

        https.get(url, function (response) {
        console.log(response);
        response.on("data", function(data){
            const weatherData=JSON.parse(data);
            var temp= weatherData.main.temp;
            temp = Number(temp)-273;
            const des= weatherData.weather[0].description;
            const icon= weatherData.weather[0].icon;
            const iconSrc= "https://openweathermap.org/img/wn/"+ icon+"@2x.png"
            // console.log(weatherData);
            console.log(temp);
            res.write("<h1>The temperature of "+query+" is " + temp+ " degree Celcius</h1>");
            res.write("<img src= "+ iconSrc+"></img>");
        })
    });

})



app.listen(3000, function () {
  console.log("Server Started");
});
