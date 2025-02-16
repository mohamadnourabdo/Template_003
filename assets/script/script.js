// Start Header

window.addEventListener("resize", function (e) {
  let width = this.window.innerWidth;
  if (width <= 992) {
    F1();
  }
});
function F1() {
  let bars = document.getElementsByClassName("toggle-menu")[0];
  let list = document.querySelector(".header ul");
  let is_list_open = false;
  bars.addEventListener("click", function () {
    if (is_list_open) {
      list.style.height = "0px";
      is_list_open = false;
    } else {
      list.style.height = "342.56px";
      is_list_open = true;
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.classList[2] !== "toggle-menu") {
      list.style.height = "0px";
      is_list_open = false;
    }
  });
}
onload = function () {
  if (this.window.innerWidth <= 992) {
    F1();
  }
};
// End Header
