//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Card - Crie um array para armazenar os nomes
let amigosArray = [];

//Card - Implementa uma função para agregar amigos

function adicionarAmigo() {
//variavel para pegar o valor do nome do amigo
let amigo = document.getElementById('amigo');

//checar se o campo está preenchido
if (amigo.value ==''){
    alert('Por favor, insira um nome.');
    return;
}


if (amigosArray.includes(amigo.value)){
    alert('Adicione um nome diferente do ja adicionado');
    return;
}

//variável para colocar o nome do amigo na lista
let listaAmigos = document.getElementById('listaAmigos');

//função que coloca o nome dos amigos digitados na lista
amigosArray.push(amigo.value);
if (listaAmigos.textContent == '') {
    listaAmigos.textContent = amigo.value;
} else {
    listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
}
amigo.value = ''
}

