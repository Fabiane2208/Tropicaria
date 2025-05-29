document.addEventListener(`DOMContentLoaded`, function (){
    const botaoDeAcessibilidade = document. getElementById (`botao-acessibilidade`)
    const opcoesDeAcessibilidade = document. getElementById (`opcao-aceibilidade`)

    botaoDeAcessibilidade.addEventListener(`click`, fuction () {
        botaoDeAcessibilidade.classList.toggle(`rotacao-botao`);
        opcoesDeAcessibilidade.classList.toggle(apresenta-lista)
    })