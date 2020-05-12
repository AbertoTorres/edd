//Funcion expresada: es cuando se le asigna el valor de una funcion anonima a una variable.
//Solo se puede llamar despues de ser expresada

//Ejemplo funcion expresada
const funcionExpresada = function(){
    console.log("Funcion Expresada")
}

funcionExpresada()

//Ejemplo funcion expresada arrow
const funcionArrowEx = ()=>console.log("Funcion Expresada Arrow")

funcionArrowEx()

//Funcion declarada: se declara la funcion y puede ser llamada incluso antes de declararla
funcionDeclarada()

function funcionDeclarada() {
    console.log("Funcion Declarada")
}

funcionDeclarada()