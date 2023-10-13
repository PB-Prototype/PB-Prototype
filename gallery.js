// Expanding tab
var content = document.getElementById("gallery");
var button = document.getElementById("show-more");

button.onclick = function(){

  if(content.className == "more"){
    content.className = "less";
    button.innerHTML = "Show More";
  } else {
    content.className ="more";
    button.innerHTML = "Show Less";
  }
};

//gallery _____________________________________________________
const numberofImages = 124; //type in number of images
let galleryDiv = ""; // the html that is going to display the thumbnails
let buttonG = false; // checks to see if user clicks next or prev so that the gallery doesn't close down
let indexShift = 0; //adjusts for when the user clicks next or previous
let indexLocation = 0; //what image is being displayed


//creates gallery
for (let i = 1; i <= numberofImages; i++) {
  //makes number of images specified with corolating numbers
  galleryDiv += `<img id = "img${i}" loading = "lazy" src="img/thumbnails/${i}img.jpg">`;
}
//comits code to html
document.getElementById('gallery').innerHTML = galleryDiv;

//button for images.
for (let i = 1; i <= numberofImages; i++) {

  document.getElementById("img" + i).addEventListener("click", function () {
  openGallery(i); //this just makes it look neet
  });
}

//opens gallery
function openGallery(i) {

  //calculates the image that should be displayed
  indexLocation = Number(i + indexShift);
  //makes index location loop around
  if (indexLocation > numberofImages) {
    indexLocation -= numberofImages;
  }
  if (indexLocation < 1) {
    indexLocation += numberofImages;
  }

  //adds full resolution image
  let fullImageHtml = `<img class = "imageLarge" src="img/gallery/${indexLocation}img.jpg">`;
  let fullImage = document.querySelector('#galleryFull').innerHTML = fullImageHtml;

  //adds background
  let galleryFull = document.querySelector('#galleryFull');
  galleryFull.classList.add('galleryFullOpen');

  //adds html for arrows
  let arrows = `<a class="arrows" id="prev">Prev</a><a class="arrows" id="next">Next</a>`;
  document.querySelector('#galleryFull').innerHTML += arrows;

  //adds functionality to the arrows
  document.querySelector('#prev').addEventListener("click", function () {
      buttonG = true;
      indexShift -= 1;
      openGallery(i);
  });
  document.querySelector('#next').addEventListener("click", function () {
    buttonG = true;
    indexShift += 1;
    openGallery(i);
  });

}

//closes open gallery if screen is clicked
galleryFull.addEventListener("click", function(){
  //if screen clicked close open gallery unless next or previous button is also clicked.
  if (buttonG == false) {

      galleryFull.classList.add("closing");
      setTimeout(closing, 500);

      function closing() {
        galleryFull.classList.remove("closing");
        document.querySelector('#galleryFull').innerHTML = "";
        galleryFull.classList.remove('galleryFullOpen');
        indexShift = 0;

    }
  }
    else {
      buttonG = false; // turns button to false so that the user doesn't get stuck
    }
});
