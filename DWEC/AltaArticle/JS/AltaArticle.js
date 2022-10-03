function menuDesplegable() {
    let familia = ["blau", "vermell", "verd"];
    familia.sort();
    const select = document.getElementsByTagName("select")[0];

    for (let i = 0; i < familia.length; i++) {
        let option = document.createElement("option");
        option.value = familia[i];
        option.innerHTML = familia[i];
        select.append(option);
    }
}

function familia() {
    const select = document.getElementsByTagName("select")[0].value;
    let resultat = "Familia: " + select + "<br>";
    return resultat;
}

function Nom() {
    const nom = document.getElementsByTagName("input")[0].value;
    let resultat = "Nom: " + nom;
    return resultat;
}

function mostrarCarectaristiques(Amplada, Llargada, Altura) {
    const select = document.getElementsByClassName("Caracteristiques")[0].value;
    let resultat = "Carectaristiques: " + Amplada + "x" + Llargada + "x" + Altura + "<br>";
    return resultat;
}

function Ubicacions() {
    const Ubi = document.getElementsByClassName('Ubicacio');
    let img = document.getElementsByClassName('imagen');

    let Passadis = Ubi[0].value;
    let Estanteria = Ubi[1].value;
    let Forat = Ubi[2].value;

    if (comprovaPassadis(Passadis) == true) {
        img[1].src = "../IMG/img1";
        resultat = "Familia: " + Passadis + " ";
    } else {
        img[1].src = "../IMG/img2.png";
    }

    if (comprovaEstanteria(Estanteria) == true) {
        img[2].src = "../IMG/img1";
        resultat = resultat + Estanteria + " ";
    } else {
        img[2].src = "../IMG/img2.png";
    }

    if (comprovaForat(Forat) == true) {
        img[3].src = "../IMG/img1";
        resultat = resultat + Forat;
    } else {
        img[3].src = "../IMG/img2.png";
    }
    return resultat;
}

function mostrarResultatFinal() {
    const familia = document.getElementsByTagName("select")[0].value;
    const nom = document.getElementsByTagName("input")[0].value;
    const Codi = document.getElementsByTagName("input")[1].value;
    const caract = document.getElementsByClassName('Caracteristiques');

    let Amplada = caract[0].value;
    let Llargada = caract[1].value;
    let Altura = caract[2].value;

    const Ubi = document.getElementsByClassName('Ubicacio');
    let Passadis = Ubi[0].value;
    let Estanteria = Ubi[1].value;
    let Forat = Ubi[2].value;

    let separador = "x";
    let resultat = " ";

    if ((nom != "") && (comprovaCarectaristiques(Amplada && Llargada && Altura) == true) && (comprovaPassadis(Passadis) == true) && (comprovaEstanteria(Estanteria) == true) && (comprovaForat(Forat) == true)) {
        resultat += familia(familia);
        resultat += Nom();
        resultat += mostrarCarectaristiques(Amplada, Llargada, Altura);
        resultat += Ubicacions();
        document.getElementsByTagName("p")[0].innerHTML = resultat;
    } else {
        document.getElementsByTagName("p")[0].innerHTML = " hola ";
    }
}

function comprovaCarectaristiques(Amplada, Llargada, Altura) {
    const regExp = /^[0-9]+$/;

    return regExp.test(Amplada, Llargada, Altura);
}

function comprovaPassadis(text) {
    const regExp = /^P\-[0-9]{2}\-E$|^P\-[0-9]{2}\-D$/;

    return regExp.test(text);
}

function comprovaEstanteria(text) {
    const regExp = /^EST\+[0-9]{2}\.[0-9]{2}$/;

    return regExp.test(text);
}

function comprovaForat(text) {
    const regExp = /^[0-9]{2}\*[A-Za-z]{3}\*[0-9]{2}\\\\[0-9]{2}$/i;

    return regExp.test(text);
}

function validarUbicacio() {
    let validarImatge = document.getElementsByClassName('Ubicacio');

    for (let i = 0; i < validarImatge.length; i++) {
        validarImatge[i].addEventListener('change', Ubicacions);
    }
}

window.onload = function start() {

    menuDesplegable();
    mostrarCarectaristiques();
    validarUbicacio();
    const boto = document.getElementsByTagName("button")[0];
    boto.addEventListener("click", onclick);
}