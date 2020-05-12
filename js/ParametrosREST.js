const arreglo = [5,10,15,20,25];
const arreglo0 = [3,3,4];
const arreglo1 = [];

arreglo.forEach(function(valor){
        console.log(valor)
    }
);

//Usando parametros REST
function rest(a,b,...c){
    let suma = a + b;
    c.forEach(elemento => suma+=elemento)
    return suma;
}

console.log(rest(2,4,5,3,1));

//Operador SPREAD o de propagacion

const arreglo2 = [arreglo, arreglo0];
console.log(arreglo2);
const arreglo3 = [...arreglo, ...arreglo0];
console.log(arreglo3);