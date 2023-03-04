
//Função Asynchronous:Usando a Promisse de outra forma.
    function testes(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                const erro = false;
                if(erro){
                    reject('Erro...');
                }else{
                    resolve('A promisse foi resolvida com sucesso!');
                }
            },5000)
        
    
    })
}

async function testes2(){
    await testes().then(function(res){
        alert(res);
    });
    alert('olá');
}

testes2();




/*
//1 - Promisses normal: Chama a função e alerta com Resolvida,Pendente ou Negado 
    function testes(){
        return new Promise(function(resolve,reject){
        
            const erro = true;
            if(erro){
                reject('Erro...');
            }else{
                resolve('A promisse foi resolvida com sucesso!');
            }
    
    })
}

testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})
*/