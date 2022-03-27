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

/***/ "./src/ts/components/shoppingCart.ts":
/*!*******************************************!*\
  !*** ./src/ts/components/shoppingCart.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar shoppingCart = function () {\r\n    var addToCartBtns = document.querySelectorAll(\".add-to-cart-btn\");\r\n    var mainContainer = document.getElementsByTagName(\"tbody\")[0];\r\n    var quantityFields = document.getElementsByClassName(\"item-num\");\r\n    var removeBtns = document.getElementsByClassName(\"item-remove-btn\");\r\n    for (var i = 0; i < addToCartBtns.length; i++) {\r\n        addToCartBtns[i].addEventListener(\"click\", addToCart);\r\n    }\r\n    function addToCart(event) {\r\n        var btn = event.target;\r\n        var btnParent = btn.parentElement;\r\n        var btnGrandparent = btn.parentElement.parentElement;\r\n        var itemName = btnParent.children[0].innerText;\r\n        var itemPrice = btnParent.children[1].innerText;\r\n        var itemImg = btnGrandparent.children[0].src;\r\n        var itemContainer = document.createElement(\"tr\");\r\n        itemContainer.innerHTML = \"<td></td>\\n            <td>\\n              <img class=\\\"products__card-cart-img\\\"\\n                src=\\\"\" + itemImg + \"\\\"\\n              />\\n            </td>\\n            <td>\\n              <h3 class=\\\"products__card-cart-text | item-name\\\">\" + itemName + \"</h3>\\n            </td>\\n            <td class=\\\"products__card-cart-text | item-price\\\"><h3>\" + itemPrice + \"</h3></td>\\n            <td><input type=\\\"number\\\" class=\\\"products__card-cart-text | item-num\\\" value=\\\"1\\\" /></td>\\n            <td class=\\\"products__card-cart-text | item-total-price\\\"><h3>\" + itemPrice + \"</h3></td>\\n            <td>\\n              <button class=\\\"products__card-cart-btn btn btn--full | item-remove-btn\\\" type=\\\"button\\\">Remove</button>\\n            </td>\";\r\n        mainContainer.append(itemContainer);\r\n        for (var i = 0; i < quantityFields.length; i++) {\r\n            quantityFields[i].addEventListener(\"change\", updateTotal);\r\n        }\r\n        for (var i = 0; i < removeBtns.length; i++) {\r\n            removeBtns[i].addEventListener(\"click\", removeItem);\r\n        }\r\n        grandTotal();\r\n    }\r\n    function updateTotal(event) {\r\n        var numOfItems = event.target;\r\n        var numOfItemsParent = numOfItems.parentElement.parentElement;\r\n        var priceField = numOfItemsParent.getElementsByClassName(\"item-price\")[0];\r\n        var priceFieldContent = priceField.children[0].innerText.replace(\"$\", \"\");\r\n        var totalField = numOfItemsParent.getElementsByClassName(\"item-total-price\")[0];\r\n        totalField.children[0].innerText =\r\n            \"$\" + numOfItems.value * priceFieldContent;\r\n        grandTotal();\r\n        // if (isNaN(numOfItems.value) || numOfItems.value <= 0) {\r\n        //   numOfItems.value = 1;\r\n        // }\r\n    }\r\n    function grandTotal() {\r\n        var total = 0;\r\n        var grandTotal = document.getElementsByClassName(\"item-grand-total\")[0];\r\n        var totalPrice = document.getElementsByClassName(\"item-total-price\");\r\n        for (var i = 0; i < totalPrice.length; i++) {\r\n            var totalPriceContent = Number(totalPrice[i].textContent.replace(\"$\", \"\"));\r\n            total += Math.floor(totalPriceContent);\r\n        }\r\n        grandTotal.children[0].textContent = \"$\" + total;\r\n    }\r\n    function removeItem(event) {\r\n        var removeBtn = event.target;\r\n        var removeBtnGrandparent = removeBtn.parentElement.parentElement;\r\n        removeBtnGrandparent.remove();\r\n        grandTotal();\r\n    }\r\n};\r\nexports[\"default\"] = shoppingCart;\r\n\n\n//# sourceURL=webpack://shopping-cart/./src/ts/components/shoppingCart.ts?");

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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar stickyHeader_1 = __webpack_require__(/*! ./components/stickyHeader */ \"./src/ts/components/stickyHeader.ts\");\r\nvar shoppingCart_1 = __webpack_require__(/*! ./components/shoppingCart */ \"./src/ts/components/shoppingCart.ts\");\r\n(0, stickyHeader_1.default)();\r\n(0, shoppingCart_1.default)();\r\n\n\n//# sourceURL=webpack://shopping-cart/./src/ts/main.ts?");

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