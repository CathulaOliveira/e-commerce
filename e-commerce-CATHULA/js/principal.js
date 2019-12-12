$(function () {
    $('#btContinuarComprando').click(function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });

    $('#btFinalizarCompra').click(function (e) {
        e.preventDefault();
        window.location.href = "compra.html";
    });
    
    $('#btComprarAgora').click(function (e) {
        e.preventDefault();
        window.location.href = "carrinho.html";
    });
    
    $('#btAdicionar').click(function (e) {
        e.preventDefault();
        aumentarQtdeProdutos();
        alertaItemAdicionado();
        adicionarProdutoNoCarrinho();
    });

    $('#qtdeProdutos').on('change', function () {
        adicionarProdutoNoCarrinho();
    });
})

function adicionarProdutoNoCarrinho() {
    montaListaDeProdutos();
}

function aumentarQtdeProdutos() {

    let qtde = new Number($('#qtdeProdutos').val());
    $('#qtdeProdutos').val(qtde + 1);
}

function alertaItemAdicionado() {
    alert("Item adicionado no carrinho");
}

function montaListaDeProdutos() {
    let items = [];
    let qtde = new Number($('#qtdeProdutos').val());
    let produto = {
        nome: 'Long drink',
        valor: 1.20,
        quantidade: qtde
    }
    items.push(produto)
    setArrayStorage(items);
}

function setArrayStorage(arr) {
    localStorage.setItem("listaProduto", JSON.stringify(arr));
}

function getArrayStorage() {
    return JSON.parse(localStorage.getItem("listaProduto"));
}
