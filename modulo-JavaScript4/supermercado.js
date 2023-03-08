var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto').value;
    var preçoProduto = document.querySelector('input[name=price').value;


    itens.push({
        nome: nomeProduto,
        valor: preçoProduto
    });

        /*
        <div class="lista-produto-single">
            <h3>RedBull</h3>
            <h3 class="price-produto"><span>$20,00</span></h3>
        </div>
        */

        let listaProdutos = document.querySelector('.lista-produtos');
        listaProdutos.innerHTML = "";
        itens.map(function(val){
            listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>`+valor+`</span></h3>
        </div>
            `;
        })


});