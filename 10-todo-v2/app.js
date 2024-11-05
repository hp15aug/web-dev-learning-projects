//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let foundItems;

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");

const itemSchema = new mongoose.Schema({
  name: String,
});
const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({ name: "Sarangi" });
const item2 = new Item({ name: "Je Chau Timi" });
const item3 = new Item({ name: "Timiley" });

const defaultItems = [item1, item2, item3];

async function getItems() {
  const Items = await Item.find({});
  return Items;
}

app.get("/", function (req, res) {
  getItems().then(function (FoundItems) {
    if (FoundItems.length == 0) {
      Item.insertMany(defaultItems).then(function (err) {
        if (err) {
          console.log(err);
        } else console.log("Saved successfully");
      });
    } else {
      res.render("list", { listTitle: "Today", newListItems: FoundItems });
    }
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;

  const item=new Item({name: itemName}); 
  item.save();
  res.redirect("/");
});


app.get("/:customListName",function(req,res){
  console.log(req.params.customListName);
} )

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
