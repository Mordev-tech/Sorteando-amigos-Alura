//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Pega as variáveis do input
    let nomeAmigo = inputAmigo.value.trim(); // remove espaço em branco
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;

    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;}

    amigos.push(nomeAmigo); //Puxa as variáveis do input e salva na lista

    inputAmigo.value = ''; // deixa em branco novamente

    atualizarListaAmigos();
}


function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
     
    amigos.forEach(function (amigo) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
        
    }
);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos na lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<li>Amigo sorteado: ${amigoSorteado} </li>`;
}




