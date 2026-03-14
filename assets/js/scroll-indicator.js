const progressBar = document.getElementById("progress");
const navBar = document.querySelector(".l-header");

function updateOnScroll() {
  const pos = document.documentElement.scrollTop;

  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = (pos * 100) / calcHeight;

  progressBar.style.width = scrollPercent + "%";

  navBar.classList.toggle("sticky", pos > 0);
}

window.addEventListener("scroll", updateOnScroll);