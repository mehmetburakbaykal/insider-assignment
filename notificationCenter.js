function init() {
  const REQUESTED_PRODUCT_COUNT = -3;

  // get all visited products from Local Storage
  const products = JSON.parse(
    localStorage.getItem("ins-last-visited-products-49218")
  ).data;

  // last 3 products of the Local Storage items
  const lastThreeProducts = products.slice(REQUESTED_PRODUCT_COUNT);

  // get path name which includes "urun" for not execute the Notification Center
  const isProductPage = window.location.pathname.split("/")[3];

  if (!isProductPage && products.length >= 3) {
    const notificationTemplate = ` 
    <div class="notification-center">
    <div class="notification-container">
      <h2 class="title">Size Özel İndirimleri Keşfedin</h2>
      <ul class="notifications">
      ${lastThreeProducts.map((product) => {
        return `<li class="notification" onclick="window.location.href='${
          product.url
        }'">
            <img
              src="${product.product_image_url}"
              alt=""
            />
            <div class="desc-container">
              <h3 class="notification-title">${product.name}</h3>
              <p class="description">
                Yalnızca size özel ${product.name} %${
          Math.floor(Math.random() * 40) + 1
        } İNDİRİMLİ!
              </p>
            </div>
          </li>`;
      })}
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

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: lightgray;
    }
    
    li {
      list-style: none;
      cursor: pointer;
    }
    
    img {
      max-width: 24%;
      max-height: 24%;
    }
    
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
    }
    
    .title {
      width: auto;
      height: 50px;
      background-color: rgb(255, 0, 85);
      padding: 5px;
      border-radius: 5px 5px 0 0;
    }
    
    .notification {
      display: flex;
      padding: 10px;
    }
    
    .desc-container {
      padding: 10px;
    }
    
    .notification-title {
      padding-bottom: 10px;
    }
    
    .button-container {
      position: fixed;
      top: 550px;
      right: 10px;
    }
    
    .btn {
      color: #ffffff;
      background-color: rgb(255, 0, 85);
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
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
  } else {
    // product sayfasında ise notification kapalı olacak
  }
}

// event listener yazılacak
init();
