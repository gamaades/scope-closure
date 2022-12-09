function saludar() {
    let usuario = "Gustavo";

    function displayUserName() {
        return `Hola ${usuario}`;
    }

    return displayUserName;
}

const s = saludar();
console.log(s);
console.log(s());
