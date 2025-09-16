// Just redirets the user when theu click the button
function learnMore(){
    URL = "Other-Pages/Challenges.html"
    window.open(URL, "_self");
}

// For the Navigation bar animation
function sideMenu(x){
    const menu = document.querySelectorAll(".Menu-Icon");

    // Toggles the animation
    x.classList.toggle("change");
}
// SideNav
function closeNav(){
    let sideBar = document.getElementById("NavContent");
    sideBar.style.width = 0;
}
function openNav(){
    let sideBar = document.getElementById("NavContent");
    sideBar.style.width = "100%";
}