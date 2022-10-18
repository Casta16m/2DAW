window.onload = function start() {
    paramatresEstrelles();
    AccioBoto();
}



function paramatresEstrelles() {
    let numestrelles = document.getElementsByClassName("estrelles")[0].addEventListener("input", () => { guardareestrella(document.getElementsByClassName("estrelles")[0]) })
    let radi = document.getElementsByClassName("estrelles")[1].addEventListener("input", () => { guardarradi(document.getElementsByClassName("estrelles")[1]) })
    let distancia = document.getElementsByClassName("estrelles")[2].addEventListener("input", () => { guardardistancia(document.getElementsByClassName("estrelles")[2]) })
}

function guardareestrella(valor) {
    let numestrelles = valor.value;
    localStorage.setItem("Numestrelles", numestrelles);
    let NumEstrelles = localStorage.getItem("Numestrelles");
    let Estrelles = localStorage.getItem('Numestrelles');
    document.getElementsByTagName("span")[0].innerHTML = Estrelles;
}

function guardarradi(valor) {
    let radi = valor.value;
    localStorage.setItem("radi", radi);
    let Radi = localStorage.getItem("radi");
    document.getElementsByTagName("span")[1].innerHTML = Radi;
}

function guardardistancia(valor) {
    let distancia = valor.value;
    localStorage.setItem("distancia", distancia);
    let Distancia = localStorage.getItem("distancia");
    document.getElementsByTagName("span")[2].innerHTML = Distancia;
}

function AccioBoto() {
    const boto = document.getElementsByTagName("button")[0];
    boto.addEventListener("click", onclick);
}