$(document).ready(function(){
    //O formulário descer através da animação
    $('header button').click(function(){
        $('form').slideDown();
    })
    //O formulario subir através da animação
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', (e) => { //Tirar o reload da pagina quando clicado em submit
        e.preventDefault();    
    //Fazer com que funcione quando o formulário for submetido
    //Se fosse no JS usaria const enderecoDaNovaImagem =document.getElementById('#endereco-imagem-nova').value. Mas no JQuery funciona como abaixo com o .val() sendo uma função
        const enderecoDaNovaImagem =$('#endereco-imagem-nova').val();
    //Adicionando o formulário, igual do HTML. criando uma constante, novo Item, as tags e o appendTo seria pra por o img dentro da tag Li. "enderecoDaNovaImagem posta abaixo são pra especificar que recebera novas imagens propostas" no input url
        const novoItem = $('<li style="display:none"></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`<div class="overlay-image-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            </div>`).appendTo(novoItem);
    //Para adicionar esse novo Li com consts na ul
        $(novoItem).appendTo('ul');
    //Adicionar uma animação quando a imagem foi carregada
        $(novoItem).fadeIn(3000);
    //Para limpar a barra de pesquisa
        $(enderecoDaNovaImagem).val('');


            
    })
    
})
