const amigos = [];

// Função adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);

    atualizarLista();

    input.value = '';
}

//Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    for (let amigo of amigos) {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const item = document.createElement('li');
    item.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    resultado.appendChild(item);
}