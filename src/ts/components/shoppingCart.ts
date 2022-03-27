const shoppingCart = () => {
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
  const mainContainer = document.getElementsByTagName("tbody")[0];
  const quantityFields = document.getElementsByClassName("item-num");
  let removeBtns = document.getElementsByClassName("item-remove-btn");

  for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", addToCart);
  }

  function addToCart(event) {
    const btn = event.target;
    const btnParent = btn.parentElement;
    const btnGrandparent = btn.parentElement.parentElement;
    const itemName = btnParent.children[0].innerText;
    const itemPrice = btnParent.children[1].innerText;
    const itemImg = btnGrandparent.children[0].src;

    const itemContainer = document.createElement("tr");
    itemContainer.innerHTML = `<td></td>
            <td>
              <img class="products__card-cart-img"
                src="${itemImg}"
              />
            </td>
            <td>
              <h3 class="products__card-cart-text | item-name">${itemName}</h3>
            </td>
            <td class="products__card-cart-text | item-price"><h3>${itemPrice}</h3></td>
            <td><input type="number" class="products__card-cart-text | item-num" value="1" /></td>
            <td class="products__card-cart-text | item-total-price"><h3>${itemPrice}</h3></td>
            <td>
              <button class="products__card-cart-btn btn btn--full | item-remove-btn" type="button">Remove</button>
            </td>`;

    mainContainer.append(itemContainer);

    for (let i = 0; i < quantityFields.length; i++) {
      quantityFields[i].addEventListener("change", updateTotal);
    }

    for (let i = 0; i < removeBtns.length; i++) {
      removeBtns[i].addEventListener("click", removeItem);
    }

    grandTotal();
  }

  function updateTotal(event) {
    const numOfItems = event.target;
    const numOfItemsParent = numOfItems.parentElement.parentElement;
    const priceField = numOfItemsParent.getElementsByClassName("item-price")[0];
    const priceFieldContent = priceField.children[0].innerText.replace("$", "");
    const totalField =
      numOfItemsParent.getElementsByClassName("item-total-price")[0];
    totalField.children[0].innerText =
      "$" + numOfItems.value * priceFieldContent;

    grandTotal();

    // if (isNaN(numOfItems.value) || numOfItems.value <= 0) {
    //   numOfItems.value = 1;
    // }
  }

  function grandTotal() {
    let total = 0;
    let grandTotal = document.getElementsByClassName("item-grand-total")[0];
    const totalPrice = document.getElementsByClassName("item-total-price");
    for (let i = 0; i < totalPrice.length; i++) {
      const totalPriceContent = Number(
        totalPrice[i].textContent.replace("$", "")
      );
      total += Math.floor(totalPriceContent);
    }
    grandTotal.children[0].textContent = "$" + total;
  }

  function removeItem(event) {
    const removeBtn = event.target;
    const removeBtnGrandparent = removeBtn.parentElement.parentElement;
    removeBtnGrandparent.remove();
    grandTotal();
  }
};

export default shoppingCart;
