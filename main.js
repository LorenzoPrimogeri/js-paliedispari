function Palindroma(parola) {
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
