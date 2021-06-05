const imageParalaxEl = document.querySelector(".header__background");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  imageParalaxEl.style.top = `${scroll * 0.5}px`;
});
