let menuList = document.querySelector("#menuList");
let menuIcon = document.querySelector("#menu-icon");
let container = document.querySelector(".container")


menuIcon.onclick = function (){
    if (menuList.style.display == "block"){
        menuList.style.display = "none";
        container.style.marginBottom = "0px";
    }
    else {
        menuList.style.display = "block";
        container.style.marginBottom = "100px";
    }

}

