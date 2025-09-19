function learnMore(){
    // Just redirets the user when theu click the button
    URL = "Other-Pages/Challenges.html"
    window.open(URL, "_self");
}

//Merging into 1 funtion
function NavBar(x){
    const sideBar = document.getElementById("NavContent");
    const menuIconSlider = document.getElementById("icon-slider");
    const icon = document.getElementById("Menu-Icon");

    if(sideBar.style.width === "100%"){
        sideBar.style.width = "0";
    }
    else{
        sideBar.style.width = "100%";
    }

    x.classList.toggle("change");

    menuIconSlider.classList.toggle("openNav");

}

