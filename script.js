const rangeBar = document.getElementById("myRange");
rangeBar.addEventListener("input", function () {
  const value =
    ((rangeBar.value - rangeBar.min) / (rangeBar.max - rangeBar.min)) * 100;
  rangeBar.style.backgroundImage = `linear-gradient(to right, green 0%, green ${value}%, lightgray ${value}%, lightgray 100%)`;
});
