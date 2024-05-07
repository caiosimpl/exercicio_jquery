$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault()
        adicionaLinhaLista()
        limpaFormInput()
        riscaTextoClique()
    })
})



function adicionaLinhaLista() {
    const novaLinha = $('#submit-form').val()
    const novoTexto = $(`<li>${novaLinha}</li>`)
    $(novoTexto).appendTo('ul')  

}

function limpaFormInput() {
    $('#submit-form').val('')
}

function riscaTextoClique() {
    $('li').on('click', function(){
        $(this).css({"text-decoration": "line-through"});
    })

}