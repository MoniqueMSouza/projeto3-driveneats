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
    

        function whatsapp(){
            const nomePrato = (document.querySelector('.rolagemPrato .borda-verde .h1')).innerHTML;
            const nomeBebida = (document.querySelector('.rolagemBebida .borda-verde .h1')).innerHTML;
            const nomeSobremesa = (document.querySelector('.rolagemSobremesa .borda-verde .h1')).innerHTML;
    
    
            const valorPrato = (document.querySelector('.rolagemPrato .borda-verde .h3')).innerHTML;
            let valorPratoNumero = Number(valorPrato);
            const valorBebida = (document.querySelector('.rolagemBebida .borda-verde .h3')).innerHTML;
            let valorBebidaNumero = Number(valorBebida);
            const valorSobremesa = (document.querySelector('.rolagemSobremesa .borda-verde .h3')).innerHTML;
            let valorSobremesaNumero = Number(valorSobremesa);
    
    
            let valorfinal =  valorPratoNumero + valorBebidaNumero + valorSobremesaNumero;
            valorfinal = valorfinal.toFixed(2)
          
    
            let mensagem = `Olá, gostaria de fazer o pedido:
            - Prato: ${nomePrato}
            - Bebida: ${nomeBebida}
            - Sobremesa: ${nomeSobremesa}
            Total: R$ ${valorfinal}`
    
            mensagem = encodeURIComponent(mensagem);
            let final = `https://wa.me/+553599083544?text=` + mensagem;
            window.open(final);
           
            }
