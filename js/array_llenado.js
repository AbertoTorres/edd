const arreglo1 = [];


console.log(`El arreglo contiene : ${arreglo1}`);
console.log(arreglo1);

arreglo1[0] = 0;
arreglo1[1] = 10;

console.log(`El arreglo contiene : ${arreglo1}`);

//iteraciones
/* for(let i=arreglo1.length; i<10; i++){
    arreglo1[i]=5;
} */

//recursividad
function rec(){
    let i=arreglo1.length;
    if(arreglo1.length<10){
        arreglo1[i]=6;
        rec();
    }
}

rec();