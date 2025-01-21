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
function limparLista() {
    amigosArray = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

//Card - Implementa uma função para sortear os amigos
    //função embaralhar
    //função para embaralhar a lista, para que não seja possível o primeiro pegar o segundo e assim por diante
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

    //função para Sortear amigo e imprimir na página HTML
function sortearAmigo() {
    //informar pelo menor 4 amigos
    if (amigosArray.length < 4){
        alert('Adicione pelo menos 4 amigos');
        return;
    }

    embaralha(amigosArray);
    let listaSorteio = document.getElementById('resultado');
    //percorre a lista (array)
    for (let i = 0; i < amigosArray.length; i++) {
        if (i == amigosArray.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosArray[i] + ' --> ' + amigosArray[0] + '<br>';
        } else {
             listaSorteio.innerHTML = listaSorteio.innerHTML + amigosArray[i] + ' --> ' + amigosArray[i + 1] + '<br>';
        }
           
    }
}