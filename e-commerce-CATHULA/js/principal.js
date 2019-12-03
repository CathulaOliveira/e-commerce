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
})