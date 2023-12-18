var valor = Math.floor(Math.random()*100) + 1;

jogo()

function jogo(){

var key1 = require(`readline-sync`);
console.log("vamos jogar um jogo em que você deve escolher um valor de 1 a 100");
key1 = key1.keyIn("aperte a x para iniciar",{hideEchoBack: true, limit: 'x'});
//------------------------------------------------------------------------------
    if(key1.toLowerCase() === 'x'){
        
var repetições = 1;
while(repetições<8){
    var escolha = require(`readline-sync`);
    resposta = escolha.question("escolha um valor: ");

if (resposta == valor){
    console.log(`Parabéns voce achou ${valor}, e isso com apenas ${repetições} tentativas`);
    var key2 = require(`readline-sync`);
    key2 = key2.keyIn("deseja jogar novamente? (S/N): ", {hideEchoBack:false, limit: 'sn'});
    if(key2.toLowerCase() === 's'){
        jogo();
    }else if (key2.toLowerCase()==='n'){
        console.log("então adeus, obrigado pela diversão!");
        break;
    }
}else 
    if(resposta<valor){
        console.log(`O valor correto é maior, tente novamente`);
        console.log(`Total de tentativas é ${repetições}`);
        var key3 = require(`readline-sync`);
        key3=key3.keyIn("Deseja continuar? (S/N) " , {hideEchoBack:false, limit: 'sn'});
        if(key3.toLowerCase()==='s'){
            console.log("--------------------")
        repetições++;
        }else if(key3.toLowerCase()==='n'){
            console.log("ok, então adeus");
            break;
        }
}else  
    if(resposta>valor){
        console.log("O valor correto é menor, tente novamente");
        console.log(`Total de tentativas é ${repetições}`);
        var key4 = require(`readline-sync`);
        key4=key4.keyIn("Deseja continuar? (S/N) " , {hideEchoBack:false, limit: 'sn'});
        if(key4.toLowerCase()==='s'){
            console.log("--------------------");
        repetições++
        }else if(key4.toLowerCase()==='n'){
            console.log("ok, então adeus");
            break;
        }

}
if(repetições>=8){
    console.log(`Que pena você chegou ao limite de ${repetições}.`)
    var key5 = require(`readline-sync`);
    key5=key5.keyIn("deseja jogar novamente? (S/N) ", {hideEchoBack:false, limit:'sn'});

    if(key5.toLowerCase()=== 's'){
        jogo();
    }else if(key5.toLowerCase()==='n'){
        return;
    }
}
    }
} else {
    console.log("parece que vc apertou outro botão, vamos tentar novamente.");
    jogo();
}
}