var buttons=document.querySelectorAll('button');
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",click_event);


}

document.addEventListener("keydown",function(event){
    klick_event(event.key);


});

function click_event()
{
    var ar=this.innerHTML;
    if (ar=='w')
    {
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    }
    else if(ar=='a')
    {
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    }
    else if(ar=='s')
    {
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    }
    else if(ar=='d')
    {
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    }
    else if(ar=='j')
    {
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    }
    else if(ar=='k')
    {
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    }
    else if(ar=='l')
    {
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    }
}

function klick_event(ar)
{
    if (ar=='w')
    {
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    }
    else if(ar=='a')
    {
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    }
    else if(ar=='s')
    {
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    }
    else if(ar=='d')
    {
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    }
    else if(ar=='j')
    {
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    }
    else if(ar=='k')
    {
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    }
    else if(ar=='l')
    {
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    }
}



