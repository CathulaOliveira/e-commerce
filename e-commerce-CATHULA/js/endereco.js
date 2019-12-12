$(function () {
    listar();

    $('#btEnderecos').click(function (e) {
        e.preventDefault();
        resetarForm();
    });

    $('#btAdicionar').click(function (e) {
        e.preventDefault();
        criarEndereco();
        alert('Endereço adicionado')
    });
    
})

function criarEndereco() {
    let endereco = {
        tipo: $('#txtTipo').val(),
        rua: $('#txtRua').val(),
        numero: $('#txtNumero').val(),
        bairro: $('#txtBairro').val(),
        cidade: $('#txtCidade').val(),
        estado: $('#txtEstado').val(),
        cep:$('#txtCep').val()
    }
    setArrayStorage(endereco)
}

function setArrayStorage(endereco) {
    enderecos = getArrayStorage() || [];
    enderecos.push(endereco)
    localStorage.setItem("listaEndereco", JSON.stringify(enderecos));
    listar();
    resetarForm();
}

function getArrayStorage() {
    return JSON.parse(localStorage.getItem("listaEndereco"));
}

function listar () {
    let enderecos = getArrayStorage();
    if (enderecos) {
        enderecos.forEach(element => {
            novoEndereco(element);
        });
    }
}

function cardEndereco(item) {
    let div = `
        <div class="col-md-6 mb-3">
            <div class="card">
                <div class="card-header">
                    <span>${item.tipo}</span>
                    <a ><i class="fa fa-edit pr-1"></i></a>
                    <a ><i class="fa fa-trash pr-1"></i></a>
                </div>
                <div class="card-body">
                    <span>${item.rua}, ${item.numero} - ${item.bairro} - ${item.cidade} - ${item.estado}, ${item.cep}</span>
                </div>
                <hr>
                <div class="custom-control custom-radio m-2 ">
                    <input type="radio" class="custom-control-input">
                    <label class="custom-control-label" >Selecionar como principal </label>
                </div>
            </div>
        </div>
   `
    return div;
}

function novoEndereco(element) {
    let linhaHtml = {
        html: cardEndereco(element)
    }
    $('#enderecos').append(linhaHtml.html);
}

function resetarForm() {
    $('#form-adicionar').each (function(){
        this.reset();
    });
}