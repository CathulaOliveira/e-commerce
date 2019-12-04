$(function () {
    $('#btContinuarComprando').click(function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    })

    $('#btFinalizarCompra').click(function (e) {
        e.preventDefault();
        window.location.href = "compra.html";
    })
    
    $('#btComprarAgora').click(function (e) {
        e.preventDefault();
        window.location.href = "carrinho.html";
    })
    
    $('#btAdicionar').click(function (e) {
        e.preventDefault();
        aumentarQtdeProdutos();
        alertaItemAdicionado();
        
    })
})

function alertaItemAdicionado() {
    alert("Item adicionado no carrinho");
}

function aumentarQtdeProdutos() {
    let qtde = new Number($('#qtdeProdutos').val());
    $('#qtdeProdutos').val(qtde + 1);
}

function setArrayStorage(arr) {
    localStorage.setItem("listaProduto", JSON.stringify(arr));
}

function getArrayStorage() {
    return JSON.parse(localStorage.getItem("listaProduto"));
}