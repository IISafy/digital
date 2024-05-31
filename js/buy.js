let Buy = document.getElementById("Buy-now");

let project = document.getElementById("buy");

let visa = document.getElementById("visa");

Buy.onclick = function () {
  visa.style.display = "flex";
  visa.style.boxShadow = " 0px 0px 20px 8px black ";
  project.style.display = "none";
};

document.querySelector(".card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerText =
    document.querySelector(".card-number-input").value;
};

document.querySelector(".card-holder-input").oninput = () => {
  document.querySelector(".card-holder-name").innerText =
    document.querySelector(".card-holder-input").value;
};

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value;
};

document.querySelector(".cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};

let imgs = document.getElementById("imgs");
let aa = document.getElementById("aa");
let submit = document.getElementById("download");
let submit1 = document.getElementById("submit-btn");
let cvv = document.getElementById("cvv");
aa.href = imgs.src;
submit.href = imgs.src;

submit1.onclick = () => {
  if (cvv !== "") {
    submit.style.display = "block";
  }
};
