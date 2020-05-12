const _arreglo1 = new Array(5);
let arreglo2 = Array.of(5);
let arreglo3 = [5];

console.log(_arreglo1);
console.log(arreglo2);
console.log(arreglo3);


//Llenado de arreglo de forma manual

/* arreglo3[0] = 0;
arreglo3[1] = 1;
arreglo3[2] = 2;
arreglo3[3] = 3;
arreglo3[4] = 4; */

/* arreglo3[6] = 20; */

//Lenado de arreglo de forma iterativa

/* for(let i=0; i<5; i++){
    arreglo2[i] = i;
} */

//Llenado de arreglo de forma recursiva

/* let recursividad = function(valor = 0){
    if(valor > 5){
        return
    }
    _arreglo1[valor] = valor;
    console.log(_arreglo1[valor])
    return recursividad(valor + 1)
} */

/* const recursividad = (valor=0)=>{
    if(valor === 5)return
    _arreglo1[valor] = valor;
    console.log(_arreglo1[valor])
    return recursividad(valor + 1)
} */


//recursividad(); 