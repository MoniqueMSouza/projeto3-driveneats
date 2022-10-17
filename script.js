let pratoSelecionado;
function selecionarPrato (botao){

const botaoSelecionadoAntes = document.querySelector('.rolagemPrato .borda-verde');
if ( botaoSelecionadoAntes !==null){
botaoSelecionadoAntes.classList.remove('borda-verde');
}
    
botao.classList.toggle('borda-verde');

pratoSelecionado = botao.innerHTML;
habilitabotao ();

}


let bebidaSelecionada;
function selecionarBebida (botao){

    const botaoSelecionadoAntes = document.querySelector('.rolagemBebida .borda-verde');
    if ( botaoSelecionadoAntes !==null){
    botaoSelecionadoAntes.classList.remove('borda-verde');
    }
        
    botao.classList.toggle('borda-verde');
    
    bebidaSelecionada = botao.innerHTML;
    habilitabotao ();
    }


    let sobremesaSelecionada;
    function selecionarSobremesa (botao){

    const botaoSelecionadoAntes = document.querySelector('.rolagemSobremesa .borda-verde');
    if ( botaoSelecionadoAntes !==null){
    botaoSelecionadoAntes.classList.remove('borda-verde');
    }
        
    botao.classList.toggle('borda-verde');

    sobremesaSelecionada = botao.innerHTML;
    habilitabotao ();
    
    }

   
        function habilitabotao (){


            // se o prato foi selecionado
            if ( pratoSelecionado !== undefined){
            //se a bebida foi selecionada
            if (bebidaSelecionada !== undefined){
            //se a sobremesa foi selecionada
        if (sobremesaSelecionada !==undefined){


        //botaocinzasome
        const ocultarcinza = document.querySelector ('.botaofinalcinza');
        ocultarcinza.classList.add('escondido')

        //botaoverdeaparece
         const exibirverde = document.querySelector('.botaofinalverde');
        exibirverde.classList.remove('escondido')
        }
        }
        }
        }
    
