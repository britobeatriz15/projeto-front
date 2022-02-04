/* 
    Quando clicar nas setas para avançar, temos que esconder 
    todas as imagens e mostrar a proxima

    A imagem atual começa em 0 (na programação começamos contando
        do 0), assim que clicar em avançar, é preciso adiciona mais 
        1 ao contador de imagens, sendo essa a segunda imagem 
        (array de imagens)
*/

//o const serve para ninguem alterar o valor da variável

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/*
    quando clicar na seta pra avançar temos que 
    esconder todas as imagens e mostrar a próxima imagem 
*/
setaAvancar.addEventListener('click', function() {

    // testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;
    
    esconderImagens();
    mostrarImagem();
});

/*
    quando clicar na seta pra voltar temos que 
    esconder todas as imagens e mostrar a imagem anterior
*/
setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
})