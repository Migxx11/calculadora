// REFERÊNCIA PARA O INPUT DA TELA (DISPLAY)
const tela = document.getElementById("tela");

// GetElementById () procura o elemento html pelo seu ID


// FUNÇÃO para adicionar os valores a tela


// criando uma função - Nomes reservados
// PARAMETROS - REGRA DA MINHA FUNÇÃO
// alert()
// if(comparação)
// {o que a minha função ira fazer}


function adicionarValor(valor){
    // Adiciona um numero ou operador na tela
    tela.value += valor

    // tela.value acesso ao conteudo do campo calculadora
    // O operador += adiciona o novo valor a um conteúdo que já existe
}

// FUNÇÃO PARA LIMPAR TODA A TELA

function limparTela(){
    tela.value = "";
    // Criamos uma string vazia
    // que ira substituir o conteúdo que está na tela
}


// FUNÇÃO PARA APAGAR O ULTIMO CARACTERE

function apagarUltimo(){
    tela.value = tela.value.slice(0,-1);

    // O metodo slice permite extrair uma parte de uma string.
    // O primeiro numero, 0, indica o inicio
    // O segundo numero, -1, indica que devemos parar

}

// FUNÇÃO PARA CALCULAR O RESULTADO
function calcularResultado(){
    
    // O try permite executar um código que pode gerar um erro
    try{
        // eval() interpreta uma string como uma expressão javascript
        //calcula a operação
        // o resultado calculado substitui todo o conteúdo da tela
         tela.value = eval(tela.value); 
    }
    catch(erro){
        tela.value = "Erro";
    }

}


//ADICIONAR EVENTOS

document.addEventListener("keydown", function(evento){
    const tecla = evento.key;
    // se for numero ou operador permitido, adiciona na tela
    if("0123456789*/+-.".includes(tecla)){
        adicionarValor(tecla);
    }



if (tecla === "Enter" || tecla === "="){
    calcularResultado();
}

if (tecla === "Backspace"){
    apagarUltimo()
}

if (tecla === "Escape"){
    limparTela()
}

})
