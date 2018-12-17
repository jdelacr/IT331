//This Javascript is for randomized images when the web page has been loaded
//Array for the numbered images and description
var GallImage = [1,2,3,4,5,6];
var Galldescription = ["Cookie in a plate", "Stack of cookies", "Chocolate cookie", "Cookies placed otwo plates", "Chocolate cookie and a coffee", "3 stacked cookies"]

function start() {
    //Generate random numbers
    var Gindex1 = Math.floor(Math.random() * 6);
    var Gindex2 = Math.floor(Math.random() * 6);
    var Gindex3 = Math.floor(Math.random() * 6);
    //Starts getting the generated numbers
    rando1(Gindex1);
    rando2(Gindex2);
    rando3(Gindex3);
}
function rando1(Gindex1) {
    var GallImg1 = document.getElementById("Gallery");
    //displays the images based on the random index number
    GallImg1.setAttribute("src", 'Gallery/cookie' + GallImage [Gindex1] + '.jpg');
    GallImg1.setAttribute("alt", Galldescription [Gindex1]);
}
function rando2(Gindex2) {
    var GallImg2 = document.getElementById("Gallery2");
    //displays the images based on the random index number
    GallImg2.setAttribute("src", 'Gallery/cookie' + GallImage [Gindex2] + '.jpg');
    GallImg2.setAttribute("alt", Galldescription [Gindex2]);
}
function rando3(Gindex3) {
    var GallImg3 = document.getElementById("Gallery3");
    //displays the images based on the random index number
    GallImg3.setAttribute("src", 'Gallery/cookie' + GallImage [Gindex3] + '.jpg');
    GallImg3.setAttribute("alt", Galldescription [Gindex3]);
}
//starts calling the start function when the page is loaded
window.addEventListener("load",start,false);