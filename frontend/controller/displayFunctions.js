function carregar() {
    if (!sessionStorage.getItem('categoria')) {
        sessionStorage.setItem('categoria', 'todos')
        carregarCategoria('todos');
    } else {
        carregarCategoria(sessionStorage.getItem('categoria'));
        document.getElementById(sessionStorage.getItem('categoria')).classList.add('secaoSelecionada');
    }
}

function abrirCadastro() {
    textProduto.textContent = 'Novo produto'
    btnCadastrar.textContent = 'Cadastrar'
    btnCadastrar.onclick = () => { cadastrar() }


    cadastroMenu.style.display = 'flex';
}

function editarProduto(id) {
    let produto = produtos.filter((produto) => produto.id == id)[0]

    inputNomeProduto.value = produto.title
    inputValorProduto.value = produto.price
    inputDescricaoProduto.textContent = produto.description
    inputUrlProduto.value = produto.image
    textProduto.textContent = 'Editar produto'
    btnCadastrar.textContent = 'Salvar'
    cadastroMenu.style.display = 'flex';

    btnCadastrar.onclick = () => { editar(id) }
}

function fecharCadastro() {
    cadastroMenu.style.display = 'none';
    formContainer.reset();
    inputDescricaoProduto.textContent = ''
}

function mudarSeçao(categoria) {
    document.getElementById(sessionStorage.getItem('categoria')).classList.remove('secaoSelecionada');
    sessionStorage.setItem('categoria', categoria);
    carregar();
}

function menuClick() {
    sidebarMenu.style.display = 'flex';

    document.addEventListener('click', checkSidebarClick);
}

function checkSidebarClick(evt) {
    let targetElement = evt.target;

    if (targetElement != sidebarMenu && !sidebarMenu.contains(event.target) && targetElement != sidebarButton && !sidebarButton.contains(event.target)) {
        sidebarMenu.style.display = 'none';
        document.removeEventListener('click', checkSidebarClick);
    }
}

function filterMenuClick() {
    let filterMenu = document.getElementById('filterOptions');
    filterMenu.style.display = 'flex';

    document.addEventListener('click', checkfilterMenuClick);
}

function checkfilterMenuClick(evt) {
    let filterMenu = document.getElementById('filterOptions');
    let filterButton = document.getElementById('filter');
    let targetElement = evt.target;

    if (targetElement != filterMenu && !filterMenu.contains(event.target) && targetElement != filterButton && !filterButton.contains(event.target)) {
        filterMenu.style.display = 'none';
        document.removeEventListener('click', checkfilterMenuClick);
    }
}

function sortByAlpha() {
    let sortByAlphaButton = document.getElementById('sortByAlpha');
    sortState = !sortState;

    notificationMessage.textContent = sortState ? 'Itens sendo exibidos em sua ordem padrão' : 'Itens organizados de A à Z';
    notificationButton.style.display = 'none';
    sortByAlphaButton.style.backgroundColor = sortState ? '#DC9000' : 'rgba(0, 0, 0, 0.5)';
    notification.style.display = 'flex';


    if (!filtrado) {
        produtos = sortState ? produtos.sort((a, b) => { return a.id - b.id }) : produtos.sort((a, b) => { return (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : ((b.title.toUpperCase() > a.title.toUpperCase()) ? -1 : 0) });
        carregarProdutos(produtos)
    } else {
        produtosFiltrados = sortState ? produtosFiltrados.sort((a, b) => { return a.id - b.id }) : produtosFiltrados.sort((a, b) => { return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0) });
        carregarProdutos(produtosFiltrados)
    }

    window.clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => { notification.style.display = 'none'; }, 3000);
}

function filtrarPorPreco(evt) {
    let texto = evt.target.textContent

    notificationMessage.textContent = 'Itens filtrados por: ' + texto;
    notificationButton.style.display = 'none';
    notification.style.display = 'flex';

    if (texto == 'Todos') {
        produtosFiltrados = produtos
        filtrado = false
    } else if (texto == 'R$5 à R$25') {
        filtrado = true
        produtosFiltrados = produtos.filter((produto) => { return 5 <= produto.price && produto.price < 26 })
    } else if (texto == 'R$26 à R$45') {
        filtrado = true
        produtosFiltrados = produtos.filter((produto) => { return 26 <= produto.price && produto.price < 46 })
    } else if (texto == 'R$46 ou mais') {
        filtrado = true
        produtosFiltrados = produtos.filter((produto) => { return 46 <= produto.price })
    }

    carregarProdutos(produtosFiltrados)

    window.clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => { notification.style.display = 'none'; }, 3000);
}

