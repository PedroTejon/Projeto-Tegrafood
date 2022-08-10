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