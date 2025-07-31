function sortear(){

    let quantidade = parseInt(document.getElementById('quantidade').value); //O .value pega o valor que foi digitado, nao o input
    let de = parseInt(document.getElementById('de').value); //parseInt pega apenas a parte inetira
    let ate = parseInt(document.getElementById('ate').value);

    
    let sorteados = [];
    let numero;

    for(let i = 0; i<quantidade; i++){ //loop de sorteio de numeros
        numero = obterNumeroAleatorio(de, ate); //Guarda em nuemero os valores
        while(sorteados.includes(numero)){ //verifica se tem dois numeros soretados iguais
            numero = obterNumeroAleatorio(de,ate);
        }

        if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
  }

        if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
  }

        
        sorteados.push(numero);  //Guarda os valores
        
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`; //permite obter ou definir o conteúdo HTML de um elemento
    aleterarStatusBotao();

}

function obterNumeroAleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; //Prdoucao de numero aleatorios de forma que pegue o teto maximo e minimo inclsuive
                        // de forma que pegue a parte inteira tambem
}

function aleterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = ' ';
    document.getElementById('de').value = ' ';
    document.getElementById('ate').value = ' '; //atribui ao valor de uamstring vazia para reiniciar 
    document.getElementById('resultado').innerHTML =  '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    aleterarStatusBotao();


}


