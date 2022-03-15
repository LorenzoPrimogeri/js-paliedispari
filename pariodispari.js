function random(min, max) {
    const random = Math.floor(Math.random() * max) + min;
    return random;
}
function PariODispari(numeroUtente, numeroComputer) {
    console.log("tu:" + numeroUtente, "computer:" + numeroComputer);
    let somma = numeroUtente + numeroComputer;
    console.log("la somma è:" + somma);
    if (somma % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }

};
let numeroUtente
let scelta;
do {
    scelta = prompt("Inserisci 'pari' o 'dispari'");
} while (scelta != "pari" && scelta != "dispari");
do {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while (numeroUtente < 1 || numeroUtente > 3 || isNaN(numeroUtente));

const numeroComputer = random(1, 5);
const verifica = PariODispari(numeroUtente, numeroComputer);

if (verifica == scelta) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}

