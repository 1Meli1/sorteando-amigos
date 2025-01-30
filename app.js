// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const Amigos = [];

function asignarTextoElemento (elemento, texto) {
    let titulo = document.querySelector (elemento)
    titulo.innerHTML = texto;
}

function agregarAmigos() {
    let amigo = document.getElementById('amigo').value;
    if (amigo) { 
        Amigos.push(amigo);
        console.log(Amigos)
        document.getElementById('amigo').value='';
    } else {
        alert('Por favor, ingresa un nombre');

    }
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpiamos la lista antes de agregar los elementos actualizados
    Amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortear() {
    if (Amigos.length > 0) {
        let ganador = sortearAmigo(Amigos);
        document.getElementById('Ganador').innerHTML = 'El ganador es: ' + ganador;
    } else {
        alert('No hay amigos para sortear');
    }
}

function sortearAmigo(Amigos){

    let Ganador = Math.floor(Math.random() * Amigos.length);
    console.log(Ganador)
    return Amigos [Ganador];
}


function mostrar(){
    mostrarListaAmigos();
    console.log(Amigos);

}
mostrar();


function nuevoSorteo() {
    Amigos.length = 0;
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('Ganador').innerHTML = '';
    document.getElementById('amigo').value = '';
    console.log('Nuevo sorteo iniciado.');
}


asignarTextoElemento('h1', 'Sorteando Amigos');
asignarTextoElemento('h2', 'Escribe el nombre de tu amigo');