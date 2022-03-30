//@ts-nocheck

const shoppingCart = () => {
  // open cart modal
  const cart = document.querySelector(".js-cart");
  const cartModalOverlay = document.querySelector(".js-modal-overlay");

  cart.addEventListener("click", () => {
    if (cartModalOverlay.style.transform === "translateX(200%)") {
      cartModalOverlay.style.transform = "translateX(0)";
    } else {
      cartModalOverlay.style.transform = "translateX(200%)";
    }
  });
  // end of open cart modal

  // close cart modal
  const closeBtn = document.querySelector(".js-close");

  closeBtn.addEventListener("click", () => {
    cartModalOverlay.style.transform = "translateX(200%)";
  });

  cartModalOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-modal-overlay")) {
      cartModalOverlay.style.transform = "translateX(200%)";
    }
  });
  // end of close cart modal

  // add products to cart
  const addToCart = document.getElementsByClassName("js-add-to-cart-btn");
  const productRow = document.getElementsByClassName("js-product");

  for (let i = 0; i < addToCart.length; i++) {
    const btn = addToCart[i];
    btn.addEventListener("click", addToCartClicked);
  }

  function addToCartClicked(event) {
    const btn = event.target;
    const cartItem = btn.parentElement;

    const title =
      cartItem.getElementsByClassName("js-product-title")[0].innerText;
    const price =
      cartItem.getElementsByClassName("js-product-price")[0].innerText;
    const imageSrc =
      cartItem.parentElement.getElementsByClassName("js-product-img")[0].src;

    addItemToCart(title, price, imageSrc);
    updateCartPrice();
  }

  function addItemToCart(title, price, imageSrc) {
    let productRow = document.createElement("div");
    productRow.classList.add("js-product");
    let productRows = document.getElementsByClassName("js-products")[0];
    let cartImage = document.getElementsByClassName("product-img");
    for (let i = 0; i < cartImage.length; i++) {
      if (cartImage[i].src == imageSrc) {
        alert("This item has already been added to the cart");
        return;
      }
    }

    const cartRowItems = `
  <div class="js-product mb-48">
        <img class="product-img mb-16" src="${imageSrc}" alt="">
        <h3 class="product-title mb-16">${title}</h3>
        <p class ="product-price mb-16">${price}</p>
        <input class="product-quantity mb-16" type="number" value="1">
        <button class="btn btn--full product-remove">Remove</button>
        </div>
        
      `;
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);

    alert("Item added to the cart");

    productRow
      .getElementsByClassName("product-remove")[0]
      .addEventListener("click", removeItem);
    productRow
      .getElementsByClassName("product-quantity")[0]
      .addEventListener("change", changeQuantity);
    updateCartPrice();
    // showProducts();
  }
  // end of add products to cart

  // Remove products from cart
  const removeBtn = document.getElementsByClassName("js-product-remove");
  for (let i = 0; i < removeBtn.length; i++) {
    const btn = removeBtn[i];
    btn.addEventListener("click", removeItem);
  }

  function removeItem(event) {
    const btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
    updateCartPrice();
  }

  // update quantity input
  const quantityInput = document.getElementsByClassName(
    "js-product-quantity"
  )[0];

  for (let i = 0; i < quantityInput; i++) {
    const input = quantityInput[i];
    input.addEventListener("change", changeQuantity);
  }

  function changeQuantity(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartPrice();
  }
  // end of update quantity input

  // update total price
  function updateCartPrice() {
    let total = 0;
    for (let i = 0; i < productRow.length; i += 2) {
      const cartRow = productRow[i];
      const priceElement = cartRow.getElementsByClassName("product-price")[0];
      const quantityElement =
        cartRow.getElementsByClassName("product-quantity")[0];

      const price = parseFloat(priceElement.innerText.replace("$", ""));
      const quantity = quantityElement.value;
      total = total + price * quantity;
    }
    document.getElementsByClassName("js-total-price")[0].innerText =
      "$" + total;

    document.getElementsByClassName("js-product-quantity")[0].textContent =
      i /= 2;
  }
  // end of update total price

  // purchase items
  const purchaseBtn = document.querySelector(".js-purchase");

  purchaseBtn.addEventListener("click", purchaseBtnClicked);

  function purchaseBtnClicked() {
    alert("Thank you for your purchase");
    cartModalOverlay.style.transform = "translateX(200%)";
    const cartItems = document.getElementsByClassName("js-products")[0];
    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
    }
    updateCartPrice();
  }
  // end of purchase items

  //alert user if cart is empty
};

export default shoppingCart;
