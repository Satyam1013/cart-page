let price1 = document.getElementById("price1").innerText;
let price2 = document.getElementById("price2").innerText;
let price3 = document.getElementById("price3").innerText;
let total = +price1 + +price2 + +price3;

let total_price = document.getElementById("total");
total_price.innerText = `Total: DKK ${total}.00`;
total_price.style.fontWeight = "500";

let sec1 = document.getElementById("sec-1");
let sec2 = document.getElementById("sec-2");
let sec3 = document.getElementById("sec-3");

var options = document.getElementsByName("bundle");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("change", function (event) {
    var clickedRadio = event.target;

    if (options[0] === clickedRadio) {
      sec1.style.backgroundColor = "#C8C8C8";
    } else {
      sec1.style.backgroundColor = "white";
    }
    if (options[1] === clickedRadio) {
      sec2.style.backgroundColor = "green";
    } else {
      sec2.style.backgroundColor = "white";
    }
    if (options[2] === clickedRadio) {
      sec3.style.backgroundColor = "#C8C8C8";
    } else {
      sec3.style.backgroundColor = "white";
    }
  });
}
