//sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
let content = document.getElementById('content');

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    content.className = "menu_gap";

  } else {
    navbar.classList.remove("sticky");
    content.className = "";
  }
}

//hamberger menu
    const toggleButton = document.getElementsByClassName('toggle_button')[0]
    const navbarLinks = document.getElementsByClassName('navbar_inner')[0]

    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })

    navbarLinks.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })
