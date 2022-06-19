window.onload = iniciar

let body = document.querySelector("body");
let container = document.querySelector(".container");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let p = document.querySelector("p");

const precio = 400000;
let cantidad = document.querySelector("#cantidad");
let color = document.querySelector("#color");

let total = document.querySelector("#total");
let cantidadFinal = document.querySelector("#cantidad-final");
let resultColor = document.querySelector("#result-color");

function iniciar() {
    let btnCalcular = document.getElementById("btn");
    btnCalcular.addEventListener('click' , clickBtnCalcular);
}
function clickBtnCalcular() {
    total.innerHTML = 'Total: ' + cantidad.value*precio;
    cantidadFinal.innerHTML = 'Cantidad: ' + cantidad.value;
    resultColor.style.backgroundColor = color.value;
}

// style
body.style.backgroundColor = "#f2f2f2";
body.style.fontFamily = 'Raleway', 'sans-serif';
body.style.display = "flex";

container.style.backgroundColor = "#7ca03f";
container.style.color = "#fff";
container.style.width = "350px";
container.style.height = "90vh";

h2.style.color = "#fff";
h2.style.fontWeight = "600";

img.style.marginTop = "40px";
img.style.marginBottom = "30px";

p.style.color = "#fff";
p.style.fontWeight = "bold";