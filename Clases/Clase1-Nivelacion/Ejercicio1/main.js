const numeros = [1,2,3,4,5]

const resultado1 = numeros.some((numero) => numero < 3) //Devuelve un booleano que nos dice si hay elementos que cumplen la condicion
const resultado2 = numeros.every((numero) => numero < 3) //Devuelve un booleano que es true si todos cumplen la condicion
console.log(resultado1)
console.log(resultado2)

//Metodos que nos sirven para iterar un array, todos tienen la misma sintaxis, como la realizada arriba
// numeros.forEach => No devuelve nada
// numeros.map => Devuelve un nuevo array
// numeros.find => 
// numeros.reduce
// numeros.filter
// numeros.some
// numeros.every

//MAP
const nuevosNumeros = numeros.map((numero) => {
    if (numero < 3) {
        numero = numero + 5
    }
    return numero
})
console.log(nuevosNumeros)

//FIND
//Devuelve el primer elemento que encuentra
const resultado3 = numeros.find((numero) => numero === 3) //Debe tener hasta el mismo tipo de datos

//Filter
const resultado4 = numeros.filter((numero) => numeros > 3)

//Obtener valor de una etiqueta
console.log(window.innerWidth) //Ancho de pantalla - Con window es todo lo referido al navegador
const titulo = document.querySelector('#titulo').textContent
const input = document.querySelector('#input')
//. es para clase
//# es para ID
console.log(titulo)

//Manejo de eventos
function handleChange(e){
    const {value} = e.target
    console.log(value)
}

input.addEventListener('change', handleChange)

