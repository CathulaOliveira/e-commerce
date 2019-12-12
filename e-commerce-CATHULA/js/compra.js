var total = 0;

$(function () {
    listar();
    setarTotal();
})

function listar() {
    let items = getArrayStorage();
    if (items) {
        items.forEach(element => {
            novoProduto(element);
            atualizaTotal(element);
        });
    }
}

function getArrayStorage() {
    return JSON.parse(localStorage.getItem("listaProduto"));
}

function linhaProdutoNoCarrinho(nome, valor, qtde) {
    let div = `
        <div class="col-md-12">
              <div class="row">
                <div class="col-md-4">
                  <a href=""><img src="img/produto1.jpg" class="img-fluid" alt="Long Drink"></a>
                </div>
                <div class="col-md-8">
                  <h5>${nome}</h5>
                  <span>R$ ${valor.toFixed(2)}</span>
                  <br>
                  <span>Vendido e enviado por: <b>Personalize</b></span>
                  <br>
                  <span>Quantidade: ${qtde}</span>
                </div>
              </div>
            </div>
   `
   
    return div;
}

function linhaProdutoResumo(nome, valor, qtde) {
    let total = valor*qtde;
    let li = `
    <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
        <h6 class="my-0">${nome}</h6>
        <small class="text-muted">Descrição</small>
        </div>
        <span class="text-muted">R$ ${total.toFixed(2)}</span>
    </li>
   `
   
    return li;
}

function novoProduto(element) {
    let nome = element.nome;
    let valor = element.valor;
    let qtde = element.quantidade;
    let linhaHtmlCarrinho = {
        html: linhaProdutoNoCarrinho(nome, valor, qtde)
    }
    let linhaHtmlResumo = {
        html: linhaProdutoResumo(nome, valor, qtde)
    }
    $('#divProdutos').append(linhaHtmlCarrinho.html);
    $('#listaResumo').append(linhaHtmlResumo.html);
}

function setarTotal() {
    $('#total').html('R$ ' + total.toFixed(2));
}

function atualizaTotal(item) {
    total += item.valor * item.quantidade;
    setarTotal();
}
