// Números
// 1. Suma
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); // 8


// 2. Resta
function restar(a, b) {
    return a - b;
}

console.log(restar(5, 3)); // 2


// 3. Producto
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(5, 3)); // 15


// 4. División
function dividir(a, b) {
    return a / b;
}

console.log(dividir(6, 3)); // 2


// 5. Potencia
function potencia(base, exponente) {
    return base ** exponente;
}

console.log(potencia(2, 3)); // 8

// Letras

// 1. Concatenar dos cadenas
function concatenar(texto1, texto2) {
    return texto1 + texto2;
}

console.log(concatenar("Hola ", "mundo")); // Hola mundo


// 2. Devolver la longitud de una cadena
function longitud(texto) {
    return texto.length;
}

console.log(longitud("Hola")); // 4


// 3. Convertir a mayúsculas
function mayusculas(texto) {
    return texto.toUpperCase();
}

console.log(mayusculas("hola")); // HOLA


// 4. Convertir a minúsculas
function minusculas(texto) {
    return texto.toLowerCase();
}

console.log(minusculas("HOLA")); // hola


// 5. Devolver el carácter de una posición concreta
function caracter(texto, indice) {
    return texto[indice];
}

console.log(caracter("Hola", 1)); // o

// Arrays

const numbers = [10, 20, 30, 40, 50];

// 1. Suma de todos los elementos
function sumarArray(array) {
    return array.reduce((total, numero) => total + numero, 0);
}

console.log(sumarArray(numbers)); // 150


// 2. Promedio de todos los elementos
function promedioArray(array) {
    const suma = array.reduce((total, numero) => total + numero, 0);
    return suma / array.length;
}

console.log(promedioArray(numbers)); // 30


// 3. Ordenar de forma ascendente
function ordenarArray(array) {
    return [...array].sort((a, b) => a - b);
}

console.log(ordenarArray([50, 10, 40, 20, 30])); // [10, 20, 30, 40, 50]


// 4. Elementos mayores que un número
function mayoresQue(array, numero) {
    return array.filter(elemento => elemento > numero);
}

console.log(mayoresQue(numbers, 25)); // [30, 40, 50]


// 5. Unir dos arrays
function unirArrays(array1, array2) {
    return [...array1, ...array2];
}

console.log(unirArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Objetos literales

// 1. Obtener el valor de la propiedad "nombre"
function obtenerNombre(objeto) {
    return objeto.nombre;
}

const persona = {
    nombre: "Carlos",
    edad: 25
};

console.log(obtenerNombre(persona)); // Carlos


// 2. Actualizar la propiedad "edad"
function actualizarEdad(objeto, nuevaEdad) {
    objeto.edad = nuevaEdad;
}

actualizarEdad(persona, 30);

console.log(persona); // { nombre: "Carlos", edad: 30 }


// 3. Agregar una nueva propiedad con valor null
function agregarPropiedad(objeto, nombrePropiedad) {
    objeto[nombrePropiedad] = null;
}

agregarPropiedad(persona, "telefono");

console.log(persona);
// { nombre: "Carlos", edad: 30, telefono: null }


// 4. Eliminar una propiedad
function eliminarPropiedad(objeto, nombrePropiedad) {
    delete objeto[nombrePropiedad];
}

eliminarPropiedad(persona, "telefono");

console.log(persona);
// { nombre: "Carlos", edad: 30 }


// 5. Contar cuántas propiedades tiene un objeto
function cantidadPropiedades(objeto) {
    return Object.keys(objeto).length;
}

console.log(cantidadPropiedades(persona)); // 2