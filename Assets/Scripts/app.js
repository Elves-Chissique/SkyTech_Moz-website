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
   bodyI.style.display = 'flex'
}
function chamarComercio(){
   bodyII.style.display = 'flex'
   bodyI.style.display = 'none'
}