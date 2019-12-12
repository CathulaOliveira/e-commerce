$(function() {
    $('#form-adicionar').validate({
        rules: {
            txtTipo: {required: true},
            txtRua: {required: true},
            txtNumero: {required: true},
            txtBairro: {required: true},
            txtCidade: {required: true},
            txtEstado: {required: true},
            txtCep: {required: true,
                  cep: true}
        },
        messages: {
            txtTipo: {required: 'Campo de preenchimeto obrigatório'},
            txtRua: {required: 'Campo de preenchimeto obrigatório'},
            txtNumero: {required: 'Campo de preenchimeto obrigatório'},
            txtBairro: {required: 'Campo de preenchimeto obrigatório'},
            txtCidade: {required: 'Campo de preenchimeto obrigatório'},
            txtEstado: {required: 'Campo de preenchimeto obrigatório'},
            txtCep: {required: 'Campo de preenchimeto obrigatório'}
        },
        errorClass: 'erro',
        errorElement: 'span',

        // destacar campos invalidos
        // element é o elemento do DOM que esta invalido
        highlight:function(element) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        // destacar campos validos
        // element é o elemento do DOM que esta invalido
        unhighlight:function(element) {
            $(element).addClass('is-valid').removeClass('is-invalid');
        }
    }); // fim validate
}) 