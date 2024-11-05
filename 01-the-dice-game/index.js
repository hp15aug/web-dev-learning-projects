var randomNumber1= Math.ceil(Math.random()*6);
var image1="images/dice"+randomNumber1+".png";
document.querySelector(".dice1").setAttribute("src", image1);

var randomNumber2= Math.ceil(Math.random()*6);
var image2="images/dice"+randomNumber2+".png";
document.querySelector(".dice2").setAttribute("src", image2);

if(randomNumber1 === randomNumber2)
{
    let res= document.querySelector(".result");
    res.innerHTML=" Draw "
}
else if(randomNumber1 > randomNumber2)
{
    let res= document.querySelector(".result");
    res.innerHTML=" Player 1 wins "
}
else
{
    let res= document.querySelector(".result");
    res.innerHTML=" Player 2 wins "
}