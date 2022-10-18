window.onload = function start() {
    dibuixarEstrelles();
    AccioBoto();
}

function dibuixarEstrelles() {
    let NumEstrelles = localStorage.getItem("Numestrelles")
    let Radi = parseInt(localStorage.getItem('radi'));
    let Distancia = parseInt(localStorage.getItem('distancia'));
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");
    ctx.beginPath();

    for (i = 0; i < NumEstrelles; i++) {
        x = Math.floor(Math.random(NumEstrelles) * canvas.width) + 1 - canvas.width / 2;
        y = Math.floor(Math.random(Radi) * canvas.height) + 1 - canvas.width / 2;
    }
    ctx.closePath();
}

function tornar() {
    location.href = "../HTML/SantJoan.html"
}

function AccioBoto() {
    const boto = document.getElementsByTagName("button")[0];
    boto.addEventListener("click", tornar);
}