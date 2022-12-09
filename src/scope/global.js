// Variables

var a; // declarando
var b = "b"; // declaramos y asignamos
b = "bb"; // reasignación
var a = "aa"; // redeclaración

// Global scope
var fruta = "Durazno"; // global
console.log(fruta);

function mejorFruta() {
    console.log(fruta);
}

mejorFruta();


function paises() {
    pais = "Chile";
    console.log(pais);
}

paises();
console.log(pais);