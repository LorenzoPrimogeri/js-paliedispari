/* function Palindroma(parola) {
    let controllo = [];
    let i = 0;
    let j = parola.length;
    let variablle = false;
    for (i = 0; i <= parola.length; i++) {
        console.log(i);
        console.log(j);
        console.log(controllo);
        j--;
        if (parola[i] == parola[j]) {
            controllo.push(parola[i]);
            variablle = true;
        } else {
            variablle = false;
            break;
        }
    }
    console.log(variablle);
    if (variablle == true) {
        return "palindroma";
    }
    else {
        return "Non palindroma";
    }
}
const parola = prompt("Inserisci una parola");
const verifica = Palindroma(parola);
if (verifica == "palindroma") {
    console.log("palindroma");
} else {
    console.log("non è palindroma");
}
*/
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
const scelta = prompt("Inserisci 'pari' o 'dispari'");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
const numeroComputer = random(1, 5);
const verifica = PariODispari(numeroUtente, numeroComputer);

if (verifica == scelta) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}

