//Change the size of the first Gallery
function resize1() {
    //Get the Ids
    var Gal = document.getElementById("Gallery");
    var Gal2 = document.getElementById("Gallery2");

    //Size for the Gallery1
    var heightPic1 = 300;
    var widthPic1 = 370;

    //Size for the Gallery2
    var heightPic2 = 300;
    var widthPic2 = 370;

    //Reset when clicked
    var ClearSize = setInterval(GalExt, 3);
    
    //Function for resizing
    function GalExt() {
        //If the size reached the 400px reset it to 300 px
        if (heightPic1 == 400){
            clearInterval(ClearSize);
        }
        //If not, then increase the pic to 400px and decrease the size
        else {
            widthPic1++;
            heightPic1++;

            widthPic2--;
            heightPic2--;

            Gal.style.height = heightPic1 + 'px';
            Gal.style.width = widthPic1 + 'px';

            Gal2.style.height = heightPic2 + 'px';
            Gal2.style.width = widthPic2 + 'px';
        }
    }
}

function resize2() {
    //Get the Ids
    var Gal = document.getElementById("Gallery");
    var Gal2 = document.getElementById("Gallery2");

    //Size for Gallery1
    var heightPic1 = 300;
    var widthPic1 = 370;

    //Size for Gallery2
    var heightPic2 = 300;
    var widthPic2 = 370;

    //Reset when clicked
    var ClearSize = setInterval(GalExt, 3);
    
    //Function for resizing
    function GalExt() {
        //If the size reached the 400px reset it to 300 px
        if (heightPic2 == 400){
            clearInterval(ClearSize);
        }
        //If not, then increase the pic to 400px and decrease the size
        else {
            widthPic1--;
            heightPic1--;

            widthPic2++;
            heightPic2++;

            Gal.style.height = heightPic1 + 'px';
            Gal.style.width = widthPic1 + 'px';

            Gal2.style.height = heightPic2 + 'px';
            Gal2.style.width = widthPic2 + 'px';
        }
    }
}