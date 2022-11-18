// button selectors
const hideButton = document.querySelector(".hide-btn");
const ringbellButton = document.querySelector(".ringbell-btn");
const notCenter = document.querySelector(".notification-container");

// click events
hideButton.addEventListener("click", function () {
  hideButton.classList.add("hidden");
  notCenter.classList.add("hidden");
  ringbellButton.classList.remove("hidden");
});

ringbellButton.addEventListener("click", function () {
  ringbellButton.classList.add("hidden");
  hideButton.classList.remove("hidden");
  notCenter.classList.remove("hidden");
});

//local storage
let visitedProducts = [];
let products = JSON.parse(localStorage.getItem('ins-last-visited-products-49218')).data;
products.map((product) => {
    visited.push(product);
})
console.log(visitedProducts[0].url);

