function carregarCategoria(categoria) {
    fetch('http://localhost:3000/products/category', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: categoria })
    })
        .then((response) => {
            return response.json();
        }).then(function (data) {
            produtos = data;

            document.getElementById('secaoAtual').textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1)
            carregarProdutos(data)
        });
}