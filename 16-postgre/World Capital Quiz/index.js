import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { render } from "ejs";

const db=new pg.Client({
  user: "postgres",
  host: "localhost",
  password: "Burn@123123",
  port: "5432",
  database: "world"
})

const app=express();

db.connect();

let quiz=[];

db.query("SELECT * FROM capitals", (err, res)=>{
  if(err)
  console.log(err);
  else
  quiz=res.rows;
db.end();
})

let totalCorrect=0;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let currentQuestion={};

app.get("/", (req, res) =>{
  totalCorrect=0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", {question: currentQuestion});
})

app.post("/submit", (req, res) =>{
  let answer=req.body.answer.trim();
  let isCorrect= false;
if(currentQuestion.capital.toLowerCase() == answer.toLowerCase())
{totalCorrect++;
console.log(totalCorrect);
isCorrect = true;}
nextQuestion();
res.render("index.ejs", {
  question: currentQuestion,
  wasCorrect: isCorrect,
  totalScore: totalCorrect
});
});

function nextQuestion()
{
  const randomCountry= quiz[Math.floor(Math.random() * quiz.length)]
  currentQuestion= randomCountry;
}

app.listen(3000, ()=> {
  console.log("Server started in port 3000");
})