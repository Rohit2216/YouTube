var menuIcon=document.querySelector(".menu-icon")
var sidebar=document.querySelector(".sidebar")
var container=document.querySelector(".container")

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")

}

// Add event listener to toggle button
// Add event listener to toggle button
document.querySelector("#dark-mode-checkbox").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
  });
  