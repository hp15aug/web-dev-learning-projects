const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Sarangi", "Jhyal Bata"];
var workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const date = new Date();
  var i = date.getDay();
  var dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = dayList[i];

  res.render("list", { listTitle: day, items: items });
});

app.post("/", function (req, res) {

  let item = req.body.input;

  console.log(req.body);

  if (req.body.submit === "WORK") {
        workItems.push(item);
       res.redirect("/work");
  } else {
      items.push(item);
      res.redirect("/");
  }
});

app.get("/about",function(req,res){
  res.render("about");
})

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "WORK", items:workItems });
});



app.listen(3000, function () {
  console.log("Server started in port 3000");
});
