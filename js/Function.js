console.log('Funcion sin parametros y sin retorno');

function uno() {
    let a = 5;
    let b = 6;
    let suma = a + b;
    console.log(`\n La suma es : ${suma} \n\n`);
}
uno();

console.log('Funcion sin parametros y con retorno');

function dos() {
    let a = 5,
        b = 6,
        suma = a + b;
    return suma
}
console.log(`\n ${dos()} \n\n`);

console.log('Funcion con parametros y sin retorno');

function tres(a, b) {
    suma = a + b;
    console.log(suma);
}
tres(4, 6);

console.log('Funcion con parametros y con retorno');


function nueva(a = 1, b = 3) {
    suma = a + b;
    return suma;
}
console.log(nueva(1, 3));
console.log(`\n ${nueva(2,5)}\n\n`);

//Ejemplo de parametros predefinidos en caso de no recivir valores
console.log(`\nEjemplo de funciones con parametros predefinidos\n\n`)

function saludar(nombre = "juan", edad = 8) {
    console.log(`Hola mi nombre es : ${nombre} y su edad es : ${edad}`)
}

saludar();
saludar("pedro");


console.log(`\n Funciones expresadas\n\n`)
let sumar = function(a, b) {
    return suma = a + b;
}

console.log(sumar(15, 50));

let x = 3;
let y = 4;
let sumas = (a, b) => suma = a + b;

console.log(sumas(33, 10));