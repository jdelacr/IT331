

function start(){
    //Get the XML request
   var xmlReq = new XMLHttpRequest();
    xmlReq.onreadystatechange = function () {
        //Determine if the file is good 
        if (this.readyState == 4 && this.status == 200){
            printSauce(this);
        }
    };
    //Opens the Sauce XML file
    xmlReq.open("GET", "Sauce.xml", true);
    xmlReq.send();

}

//Printing functions
function printSauce(xml) {
    //Prints the heading first
    var getContent = "<h1>Did Someone Say Sauce?</h1>";
    
    //Get the first tag first
    var x = xml.responseXML.getElementsByTagName("sauce");

    //Count how mancy sauce tag in the xml
    for (i = 0; i < x.length; i++){
        //for each one, we create a div class as we iterate through the sauce tag
        //We add a child node inside the sauce tag 
        getContent += '<div class = "sources"><img class="source_pic img-thumbnail img-fluid" src="' + 
        x[i].getElementsByTagName("src")[0].childNodes[0].nodeValue + '" alt="' + 
        x[i].getElementsByTagName("alt")[0].childNodes[0].nodeValue + '"><hr><a class="source_link" href="'+ 
        x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue + '">@Source</a><p>'+
        x[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue + '</p></div>';
    }
    
    document.getElementById("content").innerHTML = getContent;
}
//Start getting the information from the XML when the page loads
window.addEventListener("load",start,false);