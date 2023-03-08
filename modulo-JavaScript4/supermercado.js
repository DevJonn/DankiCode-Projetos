var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto').value;
    var preçoProduto = document.querySelector('input[name=valor_produto').value;

    alert(nomeProduto);
    alert(preçoProduto);

    itens.push({
        nome: nomeProduto,
        valor: preçoProduto
    });
});