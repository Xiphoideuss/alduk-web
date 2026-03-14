const progressBar = document.getElementById("progress");

const calcHeight =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

const scrollPercent = (pos * 100) / calcHeight;

progressBar.style.width = `${scrollPercent}%`;