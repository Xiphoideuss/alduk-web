// const progressBar = document.getElementById("progress");
// const navBar = document.querySelector(".l-header");

// function updateOnScroll() {
//   const pos = document.documentElement.scrollTop;

//   const calcHeight =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;

//   const scrollPercent = (pos * 100) / calcHeight;

//   progressBar.style.width = scrollPercent + "%";

//   navBar.classList.toggle("sticky", pos > 0);
// }

// window.addEventListener("scroll", updateOnScroll);


const progressBar = document.getElementById("progress");
const navBar = document.querySelector(".l-header");

function updateOnScroll() {
  const pos = document.documentElement.scrollTop;

  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = calcHeight > 0
    ? (pos / calcHeight) * 100
    : 0;

  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }

  if (navBar) {
    navBar.classList.toggle("sticky", pos > 0);
  }
}

window.addEventListener("scroll", updateOnScroll);

updateOnScroll();
