// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/kittyDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
    name: String,
    age: Number
  });

const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ 
    name: 'Silence' ,
    age: 4
});


  const bill=new Kitten({name:"bill", age: 6});
  const kill=new Kitten({name:"kill", age: 2});
  const fluffy = new Kitten({ name: 'fluffy', age: 5 });


Kitten.insertMany([silence, kill, bill, fluffy]).then(function(err){
    if(err){
        console.log(err);
    }
    else
    console.log("Saved successfully");
})