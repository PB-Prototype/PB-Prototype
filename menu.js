//sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
let content2 = document.getElementById('content2');

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    content2.className = "menu_gap";

  } else {
    navbar.classList.remove("sticky");
    content2.className = "";
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
