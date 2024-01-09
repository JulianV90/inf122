console.log("hola mundo")
var a=4
var b=5
var c=a+b
console.log("la suma de "+a+" + "+b+" es "+c)
const persona={
    nombre:"pokemon",
    edad:24,
    ocupacion:"desarrollador",
}
console.log(persona.edad)
persona.nombre="Pedrito"
console.log(persona.nombre)
persona.edad=102
console.log(persona.edad)
persona["apellido"]="Perez"
console.log(persona.apellido)
const colores=["rojo","amarillo","verde","plomo","negro","azul","cafe"]
console.log(colores)
console.log(colores.length)
console.log(colores[4])
console.log(colores[2])
for(let i=0;i<colores.length;i++){
    console.log("Elemento: "+ colores[i]+",indice:" +i);
}
const A=["rodrigo","julian"]
colores.push("mora")
colores.push("3245")
colores.push(A)
colores.push("Elefante")
console.log(colores)