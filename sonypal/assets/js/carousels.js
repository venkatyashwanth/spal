// let prevBtn = document.getElementById("prevBtn");
// let nextBtn = document.getElementById("nextBtn");

// let firstImageContainer = document.getElementById("firstImageContainer");

let slideIndex = 1;
let slideIndexNext = 1;

let nextSlideContainer = document.getElementById("nextSlideContainer");
let prevImageContainer = document.getElementById("prevImageContainer");

let nextBtn = document.getElementById("nextBtn");
// let pElement = document.createElement("p");
// pElement.textContent = "hello"
// let imageElement = document.createElement("img");
// imageElement.src = "./assets/images/prog_car2.png";
// imageElement.style.width = "200px";
// // imageElement.style.height = "100px";

// nextSlideContainer.appendChild(imageElement);

let imgElementSrc = [
  "./assets/images/cid_car1.png",
  "./assets/images/prog_car2.png",
  "./assets/images/dummy_2.jpg",
];

showSlides(slideIndex);
// showNextSlides(slideIndexNext);

function plusSlides(n) {
  showSlides((slideIndex += n));

  // showNextSlides((slideIndexNext += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));

  // showNextSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  setTimeout(function () {
    slides[slideIndex - 1].style.display = "block";
  }, 1000);
  //   slides[slideIndex - 1].style.display = "block";

  console.log(slideIndex - 1);
  let nextSlide = slideIndex;

  // console.log(slides.length)
  if (nextSlide >= slides.length) {
    nextSlide = 0;
  }
  getNextImage(nextSlide);
  animatePrevImage(slideIndex - 1);
}

function animatePrevImage(n){
  let previmageElement = document.createElement("img");
  previmageElement.src = imgElementSrc[n]; 
  previmageElement.style.width = "auto";
  previmageElement.style.height = "320px";
  prevImageContainer.classList.remove("hideElement");
  prevImageContainer.classList.add("prevSlideAnimation");
  
  prevImageContainer.appendChild(previmageElement);
  setTimeout(function () {
    prevImageContainer.classList.add("hideElement");
    prevImageContainer.classList.remove("prevSlideAnimation");
    prevImageContainer.removeChild(previmageElement);
  }, 900);
}

// nextBtn.addEventListener("click", function () {
//   let previmageElement = document.createElement("img");
//   previmageElement.src = imgElementSrc[0]; 
//   previmageElement.style.width = "200px";
//   prevImageContainer.classList.remove("hideElement");
//   prevImageContainer.classList.add("prevSlideAnimation");
//   prevImageContainer.appendChild(previmageElement);
//   setTimeout(function () {
//     prevImageContainer.classList.add("hideElement");
//     prevImageContainer.classList.remove("prevSlideAnimation");
//     prevImageContainer.removeChild(previmageElement);
//   }, 1000);
// });

function getNextImage(n) {
  let nextSlideContainer = document.getElementById("nextSlideContainer");
  let imageElement = document.createElement("img");
  imageElement.src = imgElementSrc[n];
  imageElement.style.width = "300px";
  imageElement.style.height = "300px";
  nextSlideContainer.appendChild(imageElement);
}


