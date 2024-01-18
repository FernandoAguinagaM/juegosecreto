let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // console.log(numeroGenerado);
    // console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el número generado está incluído en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Si el número ya existe, se vuelve a llamar a sí misma
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }



}

condicionesIniciales();

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return; // obtener número que el usuario ingresó
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números (el del inicio)
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();

    // Deshabilitar el botón nuevo juego otra vez
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}


// ** RETOS ** //

// Reto 1-2: Crea una lista vacía llamada "listaGenerica". Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes 
//           elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let listaGenerica = [];
// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Reto 3: Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// lenguajesDeProgramacion.push('Java', 'Ruby', 'Goland');

// Reto 4: Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// function mostrarLenguajes(){

//     for (let i = 0; i < lenguajesDeProgramacion.length; i++){
//         console.log(lenguajesDeProgramacion[i]);
        
//     }
// }

//mostrarLenguajes();

// Reto 5: Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

// function lenguajesInvertidos(){
//     const invertidos = lenguajesDeProgramacion.slice().reverse(); // Slice para crear una copia del arreglo para evitar modificar el original, reverse lo voltea

//     for (let i = 0; i < invertidos.length; i++) {
//         console.log(invertidos[i]);
//       }
// }

// lenguajesInvertidos();


// Reto 6: Crea una función que calcule el promedio de los elementos en una lista de números.

// const listaPromedios = [9, 10, 9, 8];

// function calcularPromedio(listaNumeros){
//     const suma = listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0); //Acumula la suma de los elementos de la lista, iniciándolo en 0 y se va sumando
//     const promedio = suma/listaNumeros.length;

//     console.log(`El promedio es: ${promedio}`);
// }

calcularPromedio(listaPromedios);

// Reto 7: Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// const numeros = [9, 10, 9, 8, 7];

// function numeroGrandeYChico(listaNumeros){
//     const maximo = Math.max(...listaNumeros); // Puntos: operador de propagación (expandir los elementos de la lista)
//     const minimo = Math.min(...listaNumeros);
  
//     console.log(`Número más grande: ${maximo}\nNúmero más pequeño: ${minimo}`);

// }

// numeroGrandeYChico(numeros);

// Reto 8: Crea una función que devuelva la suma de todos los elementos en una lista.
// const numeros = [9, 10, 9, 8, 7];

// function sumaDeLista(listaNumeros){
//     const suma = listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0); //Acumula la suma de los elementos de la lista, iniciándola en 0

//     console.log(`La suma de todos los elementos es: ${suma}`);
// }

// sumaDeLista(numeros);

// Reto 9: Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// const numeros = [9, 10, 9, 8, 7];

// function encontrarPosicion(elemento, lista){
//     return lista.indexOf(elemento);
// }

// const elementoBuscado = 8;
// const posicionEncontrada = encontrarPosicion(elementoBuscado, numeros);

// console.log(`La posición de ${elementoBuscado} en la lista es: ${posicionEncontrada}`); // Posición 3

// Reto 10: Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

// const lista1 = [2, 4, 8];
// const lista2 = [4, 6, 10];

// function sumarListas(listaA, listaB){
//     if (lista1.length !== lista2.length) { // Validación de longitud, ambos deben de tener la misma cantidad de elementos
//         console.log('Los arrays deben tener la misma longitud para sumar elemento por elemento.');
//         return;
//       }
    
//       return listaA.map((valor, indice) => valor + listaB[indice]);
// }

// const resultadoSuma = sumarListas(lista1, lista2);
// console.log('Resultado de la suma:', resultadoSuma); // 6, 10, 18

// Reto 11: Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

// const lista = [2, 4, 8, 10];

// function listaAlCuadrado(listaNumeros){
//     return listaNumeros.map((numero) => numero ** 2); // Map es para transformar cada elemento de un array
// }

// const listaCuadrados = listaAlCuadrado(lista);
// console.log('Lista original:', lista);
// console.log('Lista con cuadrados:', listaCuadrados);