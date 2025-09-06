const imageParent = document.querySelector(".image-parent");
const images = document.querySelectorAll(".image-parent .image");
const textParent = document.querySelector(".text-parent");
const texts = document.querySelectorAll(".text-parent .text");
const prevButton = document.querySelector(".slide-button.slide-button--prev");
const nextButton = document.querySelector(".slide-button.slide-button--next");

let index = 0;

prevButton.addEventListener("click", () => {
  images[index].classList.remove("active");
  texts[index].classList.remove("active");
  index++;
  if (index == images.length) {
    index = 0;
  }
  images[index].classList.add("active");
  texts[index].classList.add("active");
});

nextButton.addEventListener("click", () => {
  images[index].classList.remove("active");
  texts[index].classList.remove("active");
  index--;
  if (index == -1) {
    index = images.length - 1;
  }
  images[index].classList.add("active");
  texts[index].classList.add("active");
});

function syncImage() {}
