window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

    // _____________________________________________________

    const toggleButton = document.getElementsByClassName('toggle_button')[0]
    const navbarLinks = document.getElementsByClassName('navbar_inner')[0]

    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })

    navbarLinks.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })
