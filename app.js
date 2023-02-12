const inactivePage = document.querySelector("#inactive-page");
const activePage = document.querySelector("#active-page");
const submit = document.querySelector(".submit");
const ratings = document.querySelectorAll(".rating");
let ratingSelected = document.querySelector("span");
let clicked = 0;

ratings.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    e.preventDefault();
    if (rate.classList.contains("rating-clicked")) {
      rate.classList.remove("rating-clicked");
      clicked = 0;
    } else if (!rate.classList.contains("rating-clicked") && clicked !== 0) {
      ratings.forEach((rate) => rate.classList.remove("rating-clicked"));
      rate.classList.add("rating-clicked");
      clicked = rate.id;
    } else {
      rate.classList.add("rating-clicked");
      clicked = rate.id;
    }
    ratingSelected.innerText = rate.innerText;
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  inactivePage.style.display = "none";
  activePage.style.display = "flex";
});
