var menuIcon=document.querySelector(".menu-icon")
var sidebar=document.querySelector(".sidebar")
var container=document.querySelector(".container")

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")

}

// Get the dark mode toggle button element
var darkModeToggle = document.getElementById('dark-mode-toggle');

// Add a click event listener to the toggle button
darkModeToggle.addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the 'body' element
  document.body.classList.toggle('dark-mode');
  // Toggle the 'dark-mode' class on the 'nav' element
  document.querySelector('nav').classList.toggle('dark-mode');
  // Toggle the 'dark-mode' class on the 'complete' element
  document.querySelector('.complete').classList.toggle('dark-mode');
});



  