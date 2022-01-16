//window.onload = function () {
// hamburgerBar();
//};

export function hamburgerBar() {
  let hamburger = document.querySelector(".hamburger");
  let navBar = document.querySelector(".navbar");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
  });

  document.querySelectorAll(".navbar").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navBar.classList.remove("active");
    })
  );
}
