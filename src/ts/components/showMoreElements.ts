const showMoreElements = () => {
  const showMoreBtn = document.querySelector(".js-show-more");
  showMoreBtn.addEventListener("click", () => {
    let hiddenElements = document.querySelectorAll(
      ".js-products-container .hidden"
    );

    console.log(hiddenElements);

    let commentsList = Array.prototype.slice.call(hiddenElements).slice(0, 4);

    commentsList.forEach((item, index) => {
      item.className = "products__card";
      if (index === 0) {
        item.scrollIntoView({
          behavior: "smooth",
        });
      }
    });

    if (hiddenElements.length === 4) {
      showMoreBtn.className = "hidden";
    }
  });
};

export default showMoreElements;
