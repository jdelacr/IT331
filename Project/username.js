//When the localstroage for the username is empty or none at all
if (localStorage.getItem("user") == null) {
    var x = prompt("Enter your Username!");
    //store the entered name
    localStorage.setItem("user", x);
    location.reload();
    document.getElementById("user").innerHTML = "Welcome " + localStorage.getItem("user");
    }
else {
    //prints out name if the localstorage is not empty with the key of "user"
        document.getElementById("user").innerHTML = "Welcome " + localStorage.getItem("user");
    }
//the change function runs when the user wants to change their usename displayed in the nav bar
function changeuser() {
    var x = prompt("Enter your Username!");
    localStorage.setItem("user", x);
    location.reload();
    document.getElementById("user").innerHTML = "Welcome " + localStorage.getItem("user");
}