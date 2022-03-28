/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/components/hamburgerMenu.ts":
/*!********************************************!*\
  !*** ./src/ts/components/hamburgerMenu.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar hamburgerMenu = function () {\r\n    var hamburgerMenuBtn = document.querySelector(\".js-menu\");\r\n    var nav = document.querySelector(\".js-nav\");\r\n    var body = document.querySelector(\"body\");\r\n    hamburgerMenuBtn.addEventListener(\"click\", function () {\r\n        nav.classList.toggle(\"active\");\r\n        hamburgerMenuBtn.classList.toggle(\"active\");\r\n        body.classList.toggle(\"fixed\");\r\n    });\r\n    document.addEventListener(\"keydown\", function (e) {\r\n        if (e.key === \"Escape\" && !nav.classList.contains(\"hidden\")) {\r\n            nav.classList.remove(\"active\");\r\n            hamburgerMenuBtn.classList.remove(\"active\");\r\n            body.classList.remove(\"fixed\");\r\n        }\r\n    });\r\n};\r\nexports[\"default\"] = hamburgerMenu;\r\n\n\n//# sourceURL=webpack://shopping-cart/./src/ts/components/hamburgerMenu.ts?");

/***/ }),

/***/ "./src/ts/components/shoppingCart.ts":
/*!*******************************************!*\
  !*** ./src/ts/components/shoppingCart.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//@ts-nocheck\r\nvar shoppingCart = function () {\r\n    // open cart modal\r\n    var cart = document.querySelector(\".js-cart\");\r\n    var cartModalOverlay = document.querySelector(\".js-modal-overlay\");\r\n    cart.addEventListener(\"click\", function () {\r\n        if (cartModalOverlay.style.transform === \"translateX(-200%)\") {\r\n            cartModalOverlay.style.transform = \"translateX(0)\";\r\n        }\r\n        else {\r\n            cartModalOverlay.style.transform = \"translateX(-200%)\";\r\n        }\r\n    });\r\n    // end of open cart modal\r\n    // close cart modal\r\n    var closeBtn = document.querySelector(\".js-close\");\r\n    closeBtn.addEventListener(\"click\", function () {\r\n        cartModalOverlay.style.transform = \"translateX(-200%)\";\r\n    });\r\n    cartModalOverlay.addEventListener(\"click\", function (e) {\r\n        if (e.target.classList.contains(\"js-modal-overlay\")) {\r\n            cartModalOverlay.style.transform = \"translateX(-200%)\";\r\n        }\r\n    });\r\n    // end of close cart modal\r\n    // add products to cart\r\n    var addToCart = document.getElementsByClassName(\"js-add-to-cart-btn\");\r\n    var productRow = document.getElementsByClassName(\"js-product\");\r\n    for (var i = 0; i < addToCart.length; i++) {\r\n        var btn = addToCart[i];\r\n        btn.addEventListener(\"click\", addToCartClicked);\r\n    }\r\n    function addToCartClicked(event) {\r\n        var btn = event.target;\r\n        var cartItem = btn.parentElement;\r\n        var title = cartItem.getElementsByClassName(\"js-product-title\")[0].innerText;\r\n        var price = cartItem.getElementsByClassName(\"js-product-price\")[0].innerText;\r\n        var imageSrc = cartItem.parentElement.getElementsByClassName(\"js-product-img\")[0].src;\r\n        addItemToCart(title, price, imageSrc);\r\n        updateCartPrice();\r\n    }\r\n    function addItemToCart(title, price, imageSrc) {\r\n        var productRow = document.createElement(\"div\");\r\n        productRow.classList.add(\"js-product\");\r\n        var productRows = document.getElementsByClassName(\"js-products\")[0];\r\n        var cartImage = document.getElementsByClassName(\"product-img\");\r\n        for (var i = 0; i < cartImage.length; i++) {\r\n            if (cartImage[i].src == imageSrc) {\r\n                alert(\"This item has already been added to the cart\");\r\n                return;\r\n            }\r\n        }\r\n        var cartRowItems = \"\\n  <div class=\\\"js-product mb-48\\\">\\n        <img class=\\\"product-img mb-16\\\" src=\\\"\" + imageSrc + \"\\\" alt=\\\"\\\">\\n        <h3 class=\\\"product-title mb-16\\\">\" + title + \"</h3>\\n        <p class =\\\"product-price mb-16\\\">\" + price + \"</p>\\n        <input class=\\\"product-quantity mb-16\\\" type=\\\"number\\\" value=\\\"1\\\">\\n        <button class=\\\"btn btn--full product-remove\\\">Remove</button>\\n        </div>\\n        \\n      \";\r\n        productRow.innerHTML = cartRowItems;\r\n        productRows.append(productRow);\r\n        alert(\"Item added to the cart\");\r\n        productRow\r\n            .getElementsByClassName(\"product-remove\")[0]\r\n            .addEventListener(\"click\", removeItem);\r\n        productRow\r\n            .getElementsByClassName(\"product-quantity\")[0]\r\n            .addEventListener(\"change\", changeQuantity);\r\n        updateCartPrice();\r\n    }\r\n    // end of add products to cart\r\n    // Remove products from cart\r\n    var removeBtn = document.getElementsByClassName(\"js-product-remove\");\r\n    for (var i = 0; i < removeBtn.length; i++) {\r\n        var btn = removeBtn[i];\r\n        btn.addEventListener(\"click\", removeItem);\r\n    }\r\n    function removeItem(event) {\r\n        var btnClicked = event.target;\r\n        btnClicked.parentElement.parentElement.remove();\r\n        updateCartPrice();\r\n    }\r\n    // update quantity input\r\n    var quantityInput = document.getElementsByClassName(\"js-product-quantity\")[0];\r\n    for (var i = 0; i < quantityInput; i++) {\r\n        var input = quantityInput[i];\r\n        input.addEventListener(\"change\", changeQuantity);\r\n    }\r\n    function changeQuantity(event) {\r\n        var input = event.target;\r\n        if (isNaN(input.value) || input.value <= 0) {\r\n            input.value = 1;\r\n        }\r\n        updateCartPrice();\r\n    }\r\n    // end of update quantity input\r\n    // update total price\r\n    function updateCartPrice() {\r\n        var total = 0;\r\n        for (var i = 0; i < productRow.length; i += 2) {\r\n            var cartRow = productRow[i];\r\n            var priceElement = cartRow.getElementsByClassName(\"product-price\")[0];\r\n            var quantityElement = cartRow.getElementsByClassName(\"product-quantity\")[0];\r\n            var price = parseFloat(priceElement.innerText.replace(\"$\", \"\"));\r\n            var quantity = quantityElement.value;\r\n            total = total + price * quantity;\r\n        }\r\n        document.getElementsByClassName(\"js-total-price\")[0].innerText =\r\n            \"$\" + total;\r\n        document.getElementsByClassName(\"js-product-quantity\")[0].textContent =\r\n            i /= 2;\r\n    }\r\n    // end of update total price\r\n    // purchase items\r\n    var purchaseBtn = document.querySelector(\".js-purchase\");\r\n    var closeCartModal = document.querySelector(\".js-close\");\r\n    purchaseBtn.addEventListener(\"click\", purchaseBtnClicked);\r\n    function purchaseBtnClicked() {\r\n        alert(\"Thank you for your purchase\");\r\n        cartModalOverlay.style.transform = \"translateX(-200%)\";\r\n        var cartItems = document.getElementsByClassName(\"js-products\")[0];\r\n        while (cartItems.hasChildNodes()) {\r\n            cartItems.removeChild(cartItems.firstChild);\r\n        }\r\n        updateCartPrice();\r\n    }\r\n    // end of purchase items\r\n    //alert user if cart is empty\r\n};\r\nexports[\"default\"] = shoppingCart;\r\n\n\n//# sourceURL=webpack://shopping-cart/./src/ts/components/shoppingCart.ts?");

/***/ }),

/***/ "./src/ts/components/stickyHeader.ts":
/*!*******************************************!*\
  !*** ./src/ts/components/stickyHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar stickyHeader = function () {\r\n    var header = document.querySelector(\".js-header\");\r\n    var prevPosY = window.scrollY;\r\n    if (window.scrollY > 10) {\r\n        header.classList.add(\"not-top\");\r\n    }\r\n    window.addEventListener(\"scroll\", function () {\r\n        var posY = window.scrollY;\r\n        if (posY < 10) {\r\n            header.classList.remove(\"not-top\");\r\n        }\r\n        else {\r\n            header.classList.add(\"not-top\");\r\n        }\r\n        if (posY < prevPosY || posY <= 0) {\r\n            header.classList.remove(\"hide\");\r\n        }\r\n        else {\r\n            header.classList.add(\"hide\");\r\n        }\r\n        prevPosY = posY;\r\n    });\r\n};\r\nexports[\"default\"] = stickyHeader;\r\n\n\n//# sourceURL=webpack://shopping-cart/./src/ts/components/stickyHeader.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar stickyHeader_1 = __webpack_require__(/*! ./components/stickyHeader */ \"./src/ts/components/stickyHeader.ts\");\r\nvar shoppingCart_1 = __webpack_require__(/*! ./components/shoppingCart */ \"./src/ts/components/shoppingCart.ts\");\r\nvar hamburgerMenu_1 = __webpack_require__(/*! ./components/hamburgerMenu */ \"./src/ts/components/hamburgerMenu.ts\");\r\n(0, stickyHeader_1.default)();\r\n(0, shoppingCart_1.default)();\r\n(0, hamburgerMenu_1.default)();\r\n\n\n//# sourceURL=webpack://shopping-cart/./src/ts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;