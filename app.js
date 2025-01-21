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

    //chegar se o nome ja existe no array
    //variável para colocar o nome do amigo na lista
let nomeAmigo = amigo.value.trim().toUpperCase(); // Obtém o valor do input e remove espaços em branco

if (amigosArray.includes(nomeAmigo)){
    alert('Adicione um nome diferente do ja adicionado');
    return;
}

    if (nomeAmigo) { // Verifica se o nome não está vazio
        amigosArray.push(nomeAmigo); // Adiciona o novo nome ao array

        let liElement = document.createElement('li'); // Cria um novo elemento <li>
        liElement.textContent = nomeAmigo; // Define o texto do <li> como o novo nome digitado
        listaAmigos.appendChild(liElement); // Adiciona o <li> à <ul>

        amigo.value = ''; // Limpa o campo de input
    }
}

//Card - Implementa uma função para atualizar a lista de amigos