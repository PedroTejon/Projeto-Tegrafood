function mudarSeçao(categoria){
    sessionStorage.setItem('categoria', categoria);
    window.location = '../listagem de produtos/listagem.html'
}

function carregar(){
    produtos = JSON.parse(sessionStorage.getItem('carrinho'))
    
    cardContainer.innerHTML = ''
    
    if (produtos.length == 0){
        cardContainer.innerHTML += '<p>Não há produtos no carrinho</p>'
    }
    
    for (let produto of produtos){
        cardContainer.innerHTML += `<div class="card">
            <div class="imageCropper">
                <img class="imgCard" src="${produto.image}">
            </div>
            <div class="descricaoContainer">
                <h2 class="nomeProduto">${produto.title}</h2>
                <p class="descricaoProduto">${produto.description}</p>
            </div>
            <div class="precoContainer">
                <p class="precoProduto">R$ ${produto.price}</p>
                <select class="qntdComprar" onchange="calculoPreco()">
                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                </select>
            </div>
            <button class="delete iconButton" onclick="deletar(${produto.id})"></button>
        </div>`
    };
    
    calculoPreco()
}

function calculoPreco(){
    precos = produtos.map((produto) => produto.price);
    
    total = 0;
    for (let i=0; i<produtos.length; i++){
        total += parseFloat(precos[i]) * parseInt(document.getElementsByClassName('qntdComprar')[i].value);
    }
    
    document.getElementById('subTotal').innerText = 'R$ ' + parseFloat(total).toFixed(2);
    document.getElementById('total').innerText = 'R$ ' + parseFloat(total).toFixed(2);
}

function realizarCompra(){
    notificationMessage.textContent = 'Compra realizada';
    notification.style.display = 'flex';
    
    window.clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => { notification.style.display = 'none'; }, 3000);
}

function addCupom(){
    notificationMessage.textContent = 'Cupom indisponível';
    notification.style.display = 'flex';
    
    window.clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => { notification.style.display = 'none'; }, 3000);
}

function calcularEntrega(){
    notificationMessage.textContent = 'Impossível calcular custo de entrega no momento';
    notification.style.display = 'flex';
    
    window.clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => { notification.style.display = 'none'; }, 3000);
}

function deletar(id){
    produtos = produtos.filter((produto) => produto.id != id);
    
    sessionStorage.setItem('carrinho', JSON.stringify(produtos));
    carregar()
}