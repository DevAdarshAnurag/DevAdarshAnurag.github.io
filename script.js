var images=new Array('sih.jpg','dhoni.jpg');
var nextimage=0;
showSlides();

function showSlides() {
    if(nextimage>=images.length){nextimage=0;}
    var bg = document.getElementById("who");
    bg.style.animation = "fade-out 8s infinite";
    bg.style.backgroundImage = "url('"+images[nextimage]+"')";
    //bg.style.animationDelay = 4*nextimage;
    nextimage = nextimage + 1;
    setTimeout(showSlides, 8000); 
}