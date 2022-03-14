function Palindroma(parola) {
    let controllo = [];
    let i = 0;
    let j = parola.length - 1;
    for (i = 0; i < parola.length; i++) {
        console.log(i);
        console.log(j);
        j--;
        if (parola[i] == parola[j]) {
            controllo.push(parola[i]);
        }
    }
    if (parola == controllo) {
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
