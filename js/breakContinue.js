let arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


/* for (let i = 0; i < arreglo.length; i++) {
    //
    if (i === 3) {
        break;
    }
    console.log(arreglo[i]);
} */

for (let i = 0; i < arreglo.length; i++) {
    //console.log(i);
    if (i === 4 || i === 8) {
        continue;
    }

    console.log(arreglo[i]);
}