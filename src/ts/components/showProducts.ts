// //@ts-nocheck

// const showProducts = () => {
//   const products = [
//     {
//       img: "/src/images/item-1.png",
//       title: "Stylish cafe table",
//       price: 174,
//     },
//     {
//       img: "/src/images/item-2.png",
//       title: "Stylish cafe chair",
//       price: 85,
//     },
//     {
//       img: "/src/images/item-3.png",
//       title: "Luxury big sofa",
//       price: 490,
//     },
//     {
//       img: "/src/images/item-4.png",
//       title: "Minimalist fan",
//       price: 35,
//     },
//     {
//       img: "/src/images/item-5.png",
//       title: "Night lamp",
//       price: 105,
//     },
//     {
//       img: "/src/images/item-6.png",
//       title: "Small mug",
//       price: 10,
//     },
//     {
//       img: "/src/images/item-7.png",
//       title: "Cute bed set",
//       price: 290,
//     },
//     {
//       img: "/src/images/item-8.png",
//       title: "Minimalist flower pot",
//       price: 35,
//     },
//     {
//       img: "/src/images/item-9.png",
//       title: "Statement pieces",
//       price: 150,
//     },
//     {
//       img: "/src/images/item-10.png",
//       title: "Comfy bedcovers",
//       price: 80,
//     },
//     {
//       img: "/src/images/item-11.png",
//       title: "Sunny days modern chairs",
//       price: 300,
//     },
//     {
//       img: "/src/images/item-12.png",
//       title: "Spring sofa",
//       price: 490,
//     },
//     {
//       img: "/src/images/item-13.png",
//       title: "Bright, green dresser",
//       price: 130,
//     },
//     {
//       img: "/src/images/item-14.png",
//       title: "2-Seater ancient sofa",
//       price: 500,
//     },
//     {
//       img: "/src/images/item-15.png",
//       title: "Neck tables",
//       price: 120,
//     },
//     {
//       img: "/src/images/item-16.png",
//       title: "2-Seater sofa set",
//       price: 540,
//     },
//     {
//       img: "/src/images/item-17.png",
//       title: "Special grey sofa",
//       price: 499,
//     },
//     {
//       img: "/src/images/item-18.png",
//       title: "Stylish seater",
//       price: 129,
//     },
//   ];

//   const productsContainer = document.querySelector(".js-products-container");

//   //load items
//   window.addEventListener("DOMContentLoaded", function () {
//     displayProducts(products);
//   });

//   function displayProducts(items) {
//     let display = items.map(function (item) {
//       return `    <div class="products__card | js-products-card ">
//                  <div class="products__card-img-box">
//             <img
//               src=${item.img}
//               alt="Item"
//               class="products__card-img | js-product-img"
//             />
//             </div>
//             <div class="products__card-body">
//               <h3 class="products__card-title | js-product-title">${item.title}</h3>
//               <p class="products__card-text | js-product-price">$${item.price}</p>
//               <a
//                 href="javascript:;"
//                 class="btn btn--full products__card-btn | js-add-to-cart-btn"
//                 >Add to Cart</a
//               >

//             </div>
//           </div>`;
//     });

//     //join everything together
//     display = display.join("");
//     //place everything in the parent element
//     productsContainer.innerHTML = display;
//   }
// };

// export default showProducts;
