let divs = document.querySelectorAll("div[class^='div']");
let prices = document.querySelectorAll("div[class^='amount']");
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover", function() {
        prices[i].style.opacity = "1";
    });
    divs[i].addEventListener("mouseout", function() {
        prices[i].style.opacity = "0";
    });
}