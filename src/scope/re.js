// REdeclaración REasignación
// aca declaramos y asignamos un valor.
// VAR
var nombre; // undefined
nombre = "Gustavo";
console.log(nombre);

var apellido = "Mañán"; // Declara | asigna
apellido = "Álvarez"; // reasignar
console.log(apellido);

var segundoNombre = "Ariel"; // Declarando | asignando
var segundoNombre = "Lucas"; // Reasignando
console.log(segundoNombre);

// LET
let fruta = "Manzana"; // declara y asigna
fruta = "Pera"; // Reasignar
console.log(fruta);

// no se puede redeclarar con let
// let fruta = "Platano";
// console.log(fruta);

// CONST
const animal = "Perro"; // declara y asigna
//animal = "Gato"; // Reasignando
//const animal = "Gato"; // Redeclarando y asignando
// con CONST no se puede reasignar ni tampo redeclarar ya que se caera programa
console.log(animal);

const vehiculos = [];
vehiculos.push("kia");
console.log(vehiculos);
vehiculos.pop();
console.log(vehiculos);

