var images=new Array('assets/img/sih.jpg', 'assets/img/dhoni.jpg', 'assets/img/nitjsr.JPG');
var slogans=new Array('Mountains are there to be climbed.', 'Small milate jao, large banate jao.', 'A semi-colon missing can ruin your day.', 'while(!(succeed= try()));');
var nextimage=0;
var nextSlogan=0;
//showSlides();
showSlogans();

function showSlides() {
    if(nextimage>=images.length){nextimage=0;}
    var bg = document.getElementById("who");
    bg.style.animation = "fade-out 8s infinite";
    bg.style.backgroundImage = "url('"+images[nextimage]+"')";
    //bg.style.animationDelay = 4*nextimage;
    nextimage = nextimage + 1;
    setTimeout(showSlides, 8000); 
}

function showSlogans()
{
    if(nextSlogan>=slogans.length){nextSlogan=0;}
    var element = document.getElementById("slogan");
    element.innerHTML = slogans[nextSlogan];
    nextSlogan =  nextSlogan+1;
    setTimeout(showSlogans, 2500);
}