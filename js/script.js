//ativar links do menu

const links =document.querySelectorAll(".header-menu a");

function ativarlink(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){

    link.classList.add("ativo");
    }
}

links.forEach(ativarlink);


//ativar items do orcamento

const parametros= new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
     if (elemento) {
        elemento.checked = true;
     }
    
    console.log(elemento);

}

parametros.forEach(ativarProduto);

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
const pergunta= event.target;
const controls = pergunta.getAttribute("aria-controls");
const resposta = document.getElementById(controls)

resposta.classList.toggle('ativa');
 const ativa= resposta.classList.contains('ativa');
 console.log(ativa);
pergunta.setAttribute("aria-expanded", ativa);

console.log(resposta);
}

function eventosPerguntas(pergunta) {
pergunta.addEventListener("click",ativarPergunta )
}

perguntas.forEach(eventosPerguntas);


// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
    const img = event.target;
     const media = matchMedia('(min-width: 1000px)').matches;

     if(media){
    galeriaContainer.prepend(img);
     }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


// Animaçao
if(window.SimpleAnime)  {
new SimpleAnime();
}