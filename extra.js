const numeros = [15,6,27,25,2,76,423,65,1,5];

let [primerNumero,,segundoNumero,,tercerNumero, ...restoDeNumeros] = numeros;

const miMascota = {
    nombre: "Cachito",
    tipoDeMascota: "perro",
    color: "atigrado",
    raza: "pitbull"
}

let {nombre,tipoDeMascota,color,raza} = miMascota;
let mensaje = `Hola les presento a mi mascota su nombre es ${nombre}, es un hermoso ${tipoDeMascota}, de color: ${color} y su raza es: ${raza}`;