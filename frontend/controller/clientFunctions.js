function carregarProdutos(data){
    cardContainer.innerHTML = ''

    
    if (produtos.length == 0){
        cardContainer.innerHTML += '<p>Não há produtos nesta categoria</p>'
    }
    
    for (let produto of data){
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
                <button class="botaoComprar botaoFill" onclick="addProdAoCarrinho(${produto.id})">Comprar</button>
            </div>
        </div>`
    };
}

function addProdAoCarrinho(id){
    notificationMessage.textContent = 'Item adicionado ao carrinho';
    notificationButton.style.display = 'flex';
    notification.style.display = 'flex';
    
    produto = produtos.filter((produto) => produto.id == id)[0]
    carrinho = JSON.parse(sessionStorage.getItem('carrinho'))
    carrinhoIds = carrinho.map((carrinho) => carrinho.id)
    
    if (!carrinhoIds.includes(id)){
        carrinho.push(produto);
    }
    
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
    
    window.clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => { notification.style.display = 'none'; }, 3000);
}