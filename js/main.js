// Focus on Search Box
let iconSearch = document.getElementById("icon-search");
iconSearch.onclick = function() {
    document.querySelector(".search-box .search-content input").focus();
} 
// Show Submenu
let iconSubMenu = document.querySelectorAll(".main-menu .backage");
iconSubMenu.forEach((element,index) => {
    element.onclick = function() {
        this.children[1].classList.toggle("rotate");
        this.nextElementSibling.classList.toggle("display")
    }
})
// Show SideBar
let iconBars = document.getElementById("icon-bars");
let SideBar = document.querySelector(".sidebar");
let mainBody = document.querySelector(".main-body");
iconBars.onclick = function() {
    this.classList.toggle("right");
    SideBar.classList.toggle("right");
    mainBody.classList.toggle("right");
}
