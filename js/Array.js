const Arreglo1 = [];
let Arreglo2 = [1, true, 'hola mundo', ['A', 'B', 'C',[1,2,3,4]]];

//Arreglo vacio
console.log(Arreglo1)
//Arreglo con valores
console.log(Arreglo2)
//Mostrando el valor de cada indice
console.log(Arreglo2[0])
console.log(Arreglo2[1])
console.log(Arreglo2[2])
console.log(Arreglo2[3])
//Mostrando los valores de los arreglos anidados
console.log(Arreglo2[3])
console.log(`Obtenemos el valor de Arreglo2[3][0] ${Arreglo2[3][0]}`)
console.log(`Obtenemos el valor de Arreglo2[3][1] ${Arreglo2[3][1]}`)
console.log(`Obtenemos el valor de Arreglo2[3][2] ${Arreglo2[3][2]}`)

console.log(`Obtenemos el valor de Arreglo2[3][3][0] ${Arreglo2[3][3][0]}`)
console.log(`Obtenemos el valor de Arreglo2[3][3][1] ${Arreglo2[3][3][1]}`)
console.log(`Obtenemos el valor de Arreglo2[3][3][2] ${Arreglo2[3][3][2]}`)
console.log(`Obtenemos el valor de Arreglo2[3][3][3] ${Arreglo2[3][3][3]}`)

//Arreglo ES6
const Arreglo3 = Array.of(1, 2, 3, 4, "a")

console.log(`Valores de Arreglo3 ${Arreglo3}`)


//Arreglo foma en desuso
const Arreglo4 = new Array()

console.log(`Soy el Arreglo4`)
console.log(Arreglo4)

const Arreglo5 = new Array('string', 5, 4,[2,3,'f'])

console.log(Arreglo5)

//Usando el metodo fill
arr_Fill = Array(10).fill(0)

console.log(arr_Fill)

//Usando el metodo push para agregar un elemento
Arreglo4.push('Fresa')
Arreglo4.push('Limon')
Arreglo4.push('Melon')
Arreglo4.push('Fresa')

console.log('Arreglo4')
console.log(Arreglo4)

//Usando el metodo pop 
Arreglo4.pop()

console.log(Arreglo4)

//Usando el metodo foreach
Arreglo4.forEach(function(i,indice){
    console.log(`<li id='${indice}'>${i}</li>`)
})