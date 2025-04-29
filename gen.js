let bottone = document.getElementById("bottone")
let qta = document.getElementById("lungh")
let passdiv = document.getElementById("password")
let lettere = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let cifre =   ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5"]
let maiusc =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}"]



bottone.addEventListener ("click", function() {
    let posscarat = [...lettere];
    let ifnumeri = document.getElementById("numeri").checked
    let ifmaiusc = document.getElementById("maiusc").checked
    let ifspecial = document.getElementById("special").checked
    let password = ""
    let actualQta = qta.value;
        passdiv.textContent = "Inserisci una lunghezza!"
    if (ifnumeri) {
        posscarat.push(...cifre);
    }
    
    if (ifmaiusc) {
        posscarat.push(...maiusc)
    }
    
    if (ifspecial) {
        posscarat.push(...special)
    }
    for (let i=0; i < actualQta; i++) {
        let caratt = posscarat[Math.floor(Math.random() * posscarat.length)];
        password += caratt;
    }
    passdiv.textContent = password;

    if (qta.value===0) {
        passdiv.textContent = "Inserisci una lunghezza!"
    }
})

copia.addEventListener ("click", function() {
    navigator.clipboard.writeText(passdiv.textContent);
    alert("Copiato: " + passdiv.textContent)
})

//www.flaticon.com/free-icon/copy_1621635