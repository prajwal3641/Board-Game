"use strict";

const btn = document.querySelector(".btn");

let a, b, c;
let playing = true;

// functions
const generateRand = function () {
  a = Math.trunc(Math.random() * 25) + 1;
  b = Math.trunc(Math.random() * 25) + 1;
  c = Math.trunc(Math.random() * 25) + 1;
  while (a == b) {
    b = Math.trunc(Math.random() * 25) + 1;
  }
  while (a == c && b == c) {
    c = Math.trunc(Math.random() * 25) + 1;
  }
};
generateRand();
// eventlistners

const isMine = function (gridValue) {
  const img = document.querySelector(`.img-${gridValue}`);
  if (playing) {
    if (a != gridValue && b != gridValue && c != gridValue) {
      img.classList.remove("hidden");
    } else {
      img.classList.remove("hidden");
      img.src = "img/mine.png";
      playing = false;
      const image = document.querySelectorAll(".img");
      for (let i = 0; i < image.length; i++) {
        image[i].classList.remove("hidden");
      }
      document.querySelector(`.img-${a}`).src = "img/mine.png";
      document.querySelector(`.img-${b}`).src = "img/mine.png";
      document.querySelector(`.img-${c}`).src = "img/mine.png";
    }
  }
};

for (let i = 1; i <= 25; i++) {
  document.querySelector(`.grid-${i}`).addEventListener("click", function () {
    isMine(i);
  });
}

btn.addEventListener("click", function () {
  location.reload();
});
