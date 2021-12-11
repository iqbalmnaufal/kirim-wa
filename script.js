const button = document.getElementsByTagName("button")[0];
button.onclick = function () {
  const phone = document.querySelector("input").value;
  window.open(`https://wa.me/${phone}`);
  document.querySelector("input").value = "";
};
