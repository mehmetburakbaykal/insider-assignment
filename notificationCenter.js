function init() {
  const REQUESTED_PRODUCT_COUNT = -3;

  // get Local Storage data
  const localStorageData = JSON.parse(
    localStorage.getItem("ins-last-visited-products-49218")
  );

  // if there is no visited product for first visit website, localStorageData is null so i checked it
  let products = [];
  if (localStorageData) {
    products = localStorageData.data;
  }

  // last 3 products of the Local Storage items
  const lastThreeProducts = products.slice(REQUESTED_PRODUCT_COUNT);

  // get path name which includes "urun" or "product" for not execute the Notification Center
  const isProductPage = window.location.pathname.split("/")[3];

  // "urun" for TR page path, "product" for other languages
  if (isProductPage === "urun" || isProductPage === "product") {
    return;
  }

  // if visited local storage items above or equal 3
  if (products.length >= 3) {
    const notificationTemplate = ` 
    <div class="notification-center">
      <div class="notification-container">
        <h2 class="notification-center-title">Size Özel İndirimleri Keşfedin</h2>
        <ul class="notification-list">
           ${lastThreeProducts
             .map((product) => {
               return `<li class="notification" onclick="window.location.href='${
                 product.url
               }'">
                      <img class="notification-img"
                        src="${product.product_image_url}"
                        alt="${product.name}"
                      />
                      <div class="desc-container">
                        <h3 class="notification-title">${product.name}</h3>
                        <p class="description">
                          Yalnızca size özel ${product.name} %${
                 Math.floor(Math.random() * 30) + 10
               } İNDİRİMLİ!
                        </p>
                      </div>
                    </li>`;
             })
             .join("")}
        </ul>
      </div>
      <div class="button-container">
        <button class="hide-btn btn">
          <i class="fa-solid fa-x fa-xl"></i>
        </button>
        <button class="ringbell-btn btn hidden">
        <i class="fa-solid fa-bell fa-xl"></i>
        </button>
      </div>
    </div>
    <style>
      @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");

      .notification-center {
        width: 400px;
        height: 470px;
        position: fixed;
        top: 100px;
        right: 40px;
        z-index: 9999;
      }
      
      .notification-container {
        background-color: #ffffff;
        border-radius: 10px;
      }

      .notification-list {
        padding: 10px;
      }

      .notification-title {
        padding-bottom: 10px;
        font-size: 1.17em;
        font-weight: bold;
        margin-top: 10px !important;
        margin-bottom: 5px !important;
      }

      .notification {
        display: flex;
        list-style: none;
        cursor: pointer;
      }

      .notification:not(:first-child) {
        padding-top: 7px;
      }

      .notification:not(:last-child) {
        padding-bottom: 7px;
        border-bottom: 1px solid lightgrey;
      }

      .notification:hover {
        background-color: rgb(244, 244, 244);
        border-radius: 5px;
      }

      .notification-img {
        max-width: 24%;
        max-height: 24%;
        border-radius: 5px;
      }
      
      .notification-center-title {
        width: auto;
        height: 50px;
        color: #FFFFFF;
        background-color: #193DB0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 5px 5px 0 0;
        font-size: 1.5em;
        font-weight: bold;
        margin-top: 10px !important;
        margin-bottom: 5px !important;
      }

      .desc-container {
        display: flex;
        flex-direction: column;
        height: 140px;
        padding: 10px;
      }

      .description {
        margin-bottom: 0;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
        margin: 0 0 10px;
      }

      .button-container {
        position: absolute;
        top: 496px;
        right: -24px;
      }
      
      .btn {
        color: #FFFFFF;
        background-color: #193DB0;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.5s ease;
      }

      .btn:hover {
        color: #193DB0;
        background-color: #FFFFFF;
        border: 1px solid #193DB0;
      }
      
      .hidden {
        display: none;
      }
    </style>
    `;

    // get website body element and insert notification template at the end of the website
    var bodyElement = document.getElementsByTagName("BODY")[0];
    bodyElement.insertAdjacentHTML("beforeend", notificationTemplate);

    // button selectors
    const hideButton = document.querySelector(".hide-btn");
    const ringbellButton = document.querySelector(".ringbell-btn");
    const notificationContainer = document.querySelector(
      ".notification-container"
    );

    // click events
    hideButton.addEventListener("click", function () {
      hideButton.classList.add("hidden");
      notificationContainer.classList.add("hidden");
      ringbellButton.classList.remove("hidden");
    });

    ringbellButton.addEventListener("click", function () {
      ringbellButton.classList.add("hidden");
      hideButton.classList.remove("hidden");
      notificationContainer.classList.remove("hidden");
    });
  }
}

init();
