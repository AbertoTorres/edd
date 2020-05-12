let cadena = "string";
let numero = 9;
let arreglo = [0,1,2,3];
const arreglo2 = ['uno','dos',['x','y']];
const objeto = {
    uno: "a",
    dos: "b"};
let objeto2 = {
    arr: [0,1,2],
    obj:{uno: "a",
    dos: "b"},
    tres: 2
};    

// Ejemplos de metodos

//Metodo from --------------------------------------------------------------------------
console.log('METODO Array.from()--------------------------')
let _from = Array.from(cadena);
console.log(`Array.from() : ${_from}`);
console.log(Array.from(cadena));
//Metodo from le damos dos parametros un arreglo y una funcion 
console.log(Array.from([0,1,2,3], function(x){return x+=2}));
console.log(Array.from(arreglo, function(x){return x+2}));
console.log(Array.from(arreglo, x => x + 2));

//Metodo isArray -----------------------------------------------------------------------
console.log('METODO Array.isArray()----------------------');
console.log(Array.isArray([0,1,2,3]));
console.log(Array.isArray(arreglo));
console.log(Array.isArray(objeto));
console.log(Array.isArray('string'));
console.log(Array.isArray(4));
console.log(Array.isArray(undefined));

//Metodo Arrayof ----------------------------------------------------------------------
console.log('METODO Array.of()--------------------------')
const arr1 = Array.of(7);
let arr2 = Array.of(1,2,3);
let arr3 = Array(7);
const arr4 = Array(1,2,3);
console.log(arr1);
console.log(arr3);
console.log(arr2);
console.log(arr4);

//Medtoro pop() ----------------------------------------------------------------------
console.log('METODO pop()-------------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo.pop());
console.log(arreglo);

//Metodo push() ---------------------------------------------------------------------
console.log('METODO push()------------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo.push(6));
console.log(arreglo);
console.log(arreglo.push(7,8,9));
console.log(arreglo);

//Metodo reverse() ------------------------------------------------------------------
console.log('METODO reverse()---------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo.reverse());

//Metodo shift()---------------------------------------------------------------------
console.log('MEDTODO shift()----------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo.shift());
console.log(arreglo);

//Metodo sort()----------------------------------------------------------------------
console.log('METODO sort()------------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo.sort());
console.log(arreglo);

//Metodo splice()--------------------------------------------------------------------
console.log('METODO splice()----------------------------');
console.log(`arreglo contiene : ${arreglo}`);
//a partir del indice 0 se eliminan 3 elementos y se agrega 1 elemento con el valor de 5
console.log(arreglo.splice(0, 3, 5));
console.log(arreglo);
//a partir del indice 0  se eliminan 0 elementos y se agrega 1 elemento con el valor de 4
console.log(arreglo.splice(0, 0, 4));
console.log(arreglo);
//a patrtir del indice 3 se elimina 1 elemento y se agregan 3 elementos con los valores de 1 2 3
console.log(arreglo.splice(3, 1, 1, 2, 3));
console.log(arreglo);

//Metodo unshift()--------------------------------------------------------------------
console.log('METODO unshift()---------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo.unshift(10, 11));
console.log(arreglo);

//Metodo concat()---------------------------------------------------------------------
console.log('METODO conat()-----------------------------');
console.log(arreglo);
console.log(arreglo2);
console.log(`arreglo contiene : ${arreglo} y arreglo2 contiene ${arreglo2}`);
arreglo3 = arreglo.concat(arreglo2)
console.log(arreglo3);

//Metodo join()-----------------------------------------------------------------------
console.log('METODO join()-----------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo);
console.log(arreglo.join());
console.log(arreglo.join(''));
console.log(arreglo.join('-'));
console.log(arreglo.join('.'));

//Metodo slice()----------------------------------------------------------------------
console.log('METODO slice()----------------------------');
console.log(`arreglo contiene : ${arreglo}`);
arreglo4 = arreglo.slice(0,4);
console.log(arreglo4);
arreglo5 = arreglo.slice();
console.log(arreglo5);

//Metodo toSource()-------------------------------------------------------------------
console.log('METODO toSource()---------------------------');
console.log(`arreglo contiene : ${arreglo}`);
/* console.log(arreglo.toSource()) */

//Metodo toString()-------------------------------------------------------------------
console.log('METODO toString()---------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo.toString());

//Metodo indexOf()--------------------------------------------------------------------
console.log('METODO indexOf()----------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo);
console.log(arreglo.indexOf(8));
console.log(arreglo.indexOf(3));

//Metodo lastIndexOf()----------------------------------------------------------------
console.log('METODO lastIndexOf()-------------------------');
console.log(`arreglo contiene : ${arreglo}`);
console.log(arreglo.lastIndexOf(3));
console.log(arreglo.lastIndexOf(9));

//Metodo filter()---------------------------------------------------------------------
console.log('METODO filter()------------------------------');
console.log(`arreglo contiene : ${arreglo}`);
//usamos funcion anonima 
arreglo5 = arreglo.filter(function(valor){ return valor > 5});
console.log(arreglo5);
//usamos funcion tipo flecha
arreglo6 = arreglo.filter(val => val > 3);
console.log(arreglo6);

//Metodo forEach()---------------------------------------------------------------------
console.log('METODO forEach()-----------------------------');
console.log(`arreglo contiene : ${arreglo}`);
//usando funcion flecha 
arreglo.forEach(elemento => console.log(elemento))
console.log();
//usando funcion anonima
arreglo.forEach(function(element){return console.log(element)} )

//Metodo every()-----------------------------------------------------------------------
console.log('METODO every()-------------------------------');
console.log(`arreglo contiene : ${arreglo}`);
//usando funcion flecha
console.log(arreglo.every(val => val > 2));
//usando funcion anonima
console.log(arreglo.every(function(valor){return valor > 0}));
//expresando una funcion
const x = elem => elem >= 1;
console.log(arreglo.every(x)); 

//Metodo map()-------------------------------------------------------------------------
console.log('METODO map()--------------------------------');
console.log(`arreglo contiene : ${arreglo}`);
//uasndo funcion flecha
console.log(arreglo.map(doble => doble*2));
//usando funcion anonima
console.log(arreglo.map(function(triple){return triple*3}));
//expresando la funcion en una variable
let z = function(valor){return valor/2}
console.log(arreglo.map(z))

//Metodo some()------------------------------------------------------------------------
console.log('METODO some()-------------------------------');
console.log(`arreglo contiene : ${arreglo}`);
//usando funcion flecha 
console.log(arreglo.some(elemento => elemento % 2 === 0));
//usando funcion anonima
console.log(arreglo.some(function(elemento){return elemento % 3 ===0}));
//expresando una funcion en una variable
let y = element => element % 7 === 0
console.log(arreglo.some(y));