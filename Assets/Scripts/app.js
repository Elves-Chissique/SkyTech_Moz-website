const list = window.document.querySelectorAll('.list');

function activeLink(){
   list.forEach((item)=>
item.classList.remove('active'))
   this.classList.add('active')
}

list.forEach((item)=>
item.addEventListener('click', activeLink))


/* Configurando alterção dos conteudos do Bodys*/

let comercio = window.document.getElementById('comercio')
let home = window.document.getElementById('home')

let bodyI = window.document.querySelector('.bodyI')
let bodyII = window.document.querySelector('.bodyII')

home.addEventListener('click', chamarHome)
comercio.addEventListener('click', chamarComercio)


function chamarHome(){
   bodyII.style.display = 'none'
   bodyI.style.display = 'block'
}
function chamarComercio(){
   bodyII.style.display = 'flex'
   bodyI.style.display = 'none'
}
/*Configuração de BodyI*/
// Area de animação dos paragrafos
// Escuta o evento DOMContentLoaded corretamente
window.addEventListener('DOMContentLoaded', () => {
   // Verificando se o ScrollTrigger foi carregado corretamente
   if (typeof ScrollTrigger !== 'undefined') {
       // Seleciona os elementos
       const Descr = document.querySelector('.Descr'); // Um único elemento
       const firtParag = document.querySelectorAll('.firt-parag'); // NodeList com múltiplos elementos

       // Animação em múltiplos elementos ".firt-parag" (se existirem)
       gsap.to(firtParag, {
           opacity:1,
           marginLeft:50,
           scale: 1.2,
           duration: .5,
           stagger: 0.1, // Animação em cascata para cada elemento
           scrollTrigger: {
               trigger: Descr, // Define o trigger para o elemento ".Descr"
               start: 'top center', // Quando o topo de .Descr atingir o centro da tela
               end: 'bottom center', // Quando o fundo de .Descr atingir o centro da tela
               scrub: true, // Faz a animação acompanhar o movimento do scroll
           }
       });
   } else {
       console.warn("ScrollTrigger não foi carregado corretamente.");
   }
});


/*Area de linkar Vanilla Tillt*/
window.addEventListener('DOMContentLoaded', ()=>{
   const caixasServicos = document.querySelectorAll('.caixas-servicos')
   VanillaTilt.init(document.querySelectorAll(".caixas-servicos"));
})






// Configurando BodyII o play rate do video de background 
var videoBg = window.document.querySelector('.video-bg')

videoBg.playbackRate = 0.5