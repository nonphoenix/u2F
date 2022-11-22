let imagen = document.getElementById("sisi");
let imagenes = ["img/s2.png", "img/s3.png", "img/s1.png"];
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  imagen.src = imagenes[random];
}, 1000);

let picture = document.getElementById("pp");
let pictures = ["img/p2.png", "img/p3.png", "img/p1.png"];
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  picture.src = pictures[random];
}, 1000);

let cancion = document.getElementById("cc");
let canciones = ["img/m2.png", "img/m3.png", "img/m1.png"];
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  cancion.src = canciones[random];
}, 1000);
