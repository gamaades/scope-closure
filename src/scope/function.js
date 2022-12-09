function saludo() {
    let userName = "Gus";
    console.log(userName);

    if (userName === "Gus") {
        console.log(`Hola ${userName}!`);
    }
}

saludo();
console.log(userName); // No es factible acceder a esta variables fuera de la funcion, ya que esta variable no esta declarada y arrojara una error.