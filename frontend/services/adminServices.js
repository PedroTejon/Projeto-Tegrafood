function editar(id) {
    if (formContainer.checkValidity()) {
        fetch('https://localhost:3001/products', {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                title: inputNomeProduto.value,
                price: parseFloat(inputValorProduto.value),
                description: inputDescricaoProduto.value,
                image: inputUrlProduto.value,
                category: inputCategoriaProduto.value
            })
        })
            .then((response) => {
                return response.json();
            }).then(function (data) {
                fecharCadastro();
                carregarCategoria(sessionStorage.getItem('categoria'))
            });
    }
}

function cadastrar() {
    if (formContainer.checkValidity()) {
        fetch('https://localhost:3001/products', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: inputNomeProduto.value,
                price: parseFloat(inputValorProduto.value),
                description: inputDescricaoProduto.value,
                image: inputUrlProduto.value,
                category: inputCategoriaProduto.value
            })
        })
            .then((response) => {
                return response.json();
            }).then(function (data) {
                fecharCadastro();
                carregarCategoria(sessionStorage.getItem('categoria'))
            });
    }
}

function carregarProdutos(data) {
    cardContainer.innerHTML = ''


    if (produtos.length == 0) {
        cardContainer.innerHTML += '<p>Não há produtos nesta categoria</p>'
    }

    for (let produto of data) {
        cardContainer.innerHTML += `<div class="card">
            <div class="imageCropper">
                <img class="imgCard" src="${produto.image}">
            </div>
            <div class="descricaoContainer">
                <h2 class="nomeProduto">${produto.title}</h2>
                <p class="descricaoProduto">${produto.description}</p>
            </div>
            <div class="precoContainer">
                <p class="precoProduto">R$ ${parseFloat(produto.price).toFixed(2)}</p>
                <button class="botaoComprar botaoFill" onclick="editarProduto(${produto.id})">Editar</button>
            </div>
        </div>`
    };
}