const button = document.getElementsByTagName("button")[0];
button.onclick = function () {
  const phone = document.querySelector("input").value;
  if (phone.charAt(0) === "0") {
    console.log(phone);
    // remove first char to another char
    const newPhone = phone.substring(1);
    // add +38 to the beginning of the phone number
    const newPhone2 = "62" + newPhone;
    window.open(`https://wa.me/${newPhone2}`);
    document.querySelector("input").value = "";
    return;
  }
  window.open(`https://wa.me/${phone}`);
  document.querySelector("input").value = "";
};
