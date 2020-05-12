const arreglo = [['Rafa',10,15,20,30,['a','b','c']],['Rodolfo',78,11,[1,2]],['Andrea',60,['w','x','y','z']]];

for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
    for(let j=0; j<arreglo[i].length; j++){
        console.log(arreglo[i][j]);
        if(arreglo[i][j].length !== undefined && j!==0){
            for(let k=0; k<arreglo[i][j].length; k++){
                console.log(arreglo[i][j][k]);
            }
        }   
    }
}

/* let i=0;
let j=0;
let k=0;

function rec(){
if(i < arreglo.length){
    console.log(arreglo[i]);
    if(k<arreglo[i].length-1){
        console.log(arreglo[i][k]);
        k++
        rec();
    }
    i++
    rec();
}
}

rec(); */