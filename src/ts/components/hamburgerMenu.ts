const hamburgerMenu = () => {
  const hamburgerMenuBtn = document.querySelector(".js-menu");
  const nav = document.querySelector(".js-nav");
  const body = document.querySelector("body");

  hamburgerMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburgerMenuBtn.classList.toggle("active");
    body.classList.toggle("fixed");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !nav.classList.contains("hidden")) {
      nav.classList.remove("active");
      hamburgerMenuBtn.classList.remove("active");
      body.classList.remove("fixed");
    }
  });
};

export default hamburgerMenu;
