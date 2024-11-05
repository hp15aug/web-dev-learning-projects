
for(var i=0;i<=6;i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,keyPres)
}


function keyPres(){
    {

        var keyP= 'sounds/'+this.innerHTML+'.mp3';
        let audio = new Audio(keyP);
        audio.play();

    }
}