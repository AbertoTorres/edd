//Declarando objeto vacio
const obj_Uno = {}
console.log(obj_Uno)

//Declarando objeto vacion con new (desuso)
const obj_Dos = new Object()
console.log(obj_Dos)

//Declarando objeto con contenido
const obj_Tres = {
    Fruta: "aguacate",
    color: "verde",
    precio: 25.00,
    empaque: [1,2,4,6,24],
    procedencia: {
        Pais: "Mexico",
        estado: "Michoacan"
    }
}

console.log(obj_Tres)
//Accediendo de forma individual a algunos valores por medio de notacion punto
console.log(`Propiedad Fruta : ${obj_Tres.Fruta}`)
console.log(`Propiedad precio : ${obj_Tres.precio}`)
console.log(`Propiedad empaque : ${obj_Tres.empaque[2]}`)
console.log(`Propiedad procedencia : ${obj_Tres.procedencia.estado}`)

//Accediendo por medio de corchetes
console.log(`Propiedad Fruta : ${obj_Tres["Fruta"]}`)
console.log(`Propiedad precio : ${obj_Tres["precio"]}`)
console.log(`Propiedad empaque : ${obj_Tres["empaque"][4]}`)
console.log(`Propiedad procedencia : ${obj_Tres["procedencia"]["Pais"]}`)

//Usando metodo keys
console.log(Object.keys(obj_Tres))

//Usando metodo values
console.log(Object.values(obj_Tres))

//usando metodo hasOwnProperty
console.log(obj_Tres.hasOwnProperty("precio"))
console.log(obj_Tres.hasOwnProperty("edad"))