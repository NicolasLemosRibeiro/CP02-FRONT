

const [compartilhar, salvar] = document.querySelectorAll(".box-title--slide ")
const svg = salvar.querySelector('svg')

if (localStorage.getItem('salvo')){
    svg.style.setProperty('fill','red')
} 

salvar.addEventListener("click", (e)=>{
    const svg = salvar.querySelector('svg')
    if (svg.style.fill === 'red'){
        svg.style.setProperty('fill','none')
        localStorage.clear('salvo')

    } else {
        svg.style.setProperty('fill','red')
        localStorage.setItem('salvo', 'true')
    }
    console.log(svg)

})

console.log(localStorage.getItem('salvo'))
console.log('teste')


let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

window.onclick = function(event) {
    if (!event.target.closest('.sub-menu-button')) {
        subMenu.classList.remove('open-menu');
    }
}





const feedbacks = [{
    nome: 'Enzo Teles',
    cidade: 'São Paulo, Brasil · Ficou uma semana',
    avaliacao: 'Agosto de 2023',
    comentario: 'Gostei, incrivel o local e as pessoas :)',
    foto: 'img/Teles.webp'
},
{
    nome: ' Gabriel Borba',
    cidade: 'São Paulo, Brasil · Ficou algumas noites',
    avaliacao: 'janeiro de 2024',
    comentario: 'incrivel lugar para festas e ficar com os amigos.',
    foto: 'img/Borba.webp'
}
];

const areaFeedbacks = document.querySelector('#feedbacks');

window.onload = function renderizarFeedbacks() {
    feedbacks.forEach(elemento => {

const divPessoa = document.createElement('div');
divPessoa.classList.add('pessoa');
divPessoa.classList.add('swiper-slide');



const fotoDaPessoa = document.createElement('img');
fotoDaPessoa.src = elemento.foto;
fotoDaPessoa.alt = "Foto de " + elemento.nome;
fotoDaPessoa.classList.add('perfil-img'); 

const nomeDaPessoa = document.createElement('h1');
        nomeDaPessoa.innerHTML = elemento.nome;

        divPessoa.append(fotoDaPessoa);
        divPessoa.append(nomeDaPessoa);
       

const cidadeDaPessoa = document.createElement('h3');
        cidadeDaPessoa.innerHTML = elemento.cidade;
        divPessoa.appendChild(cidadeDaPessoa);

const avaliacaoDaPessoa = document.createElement('h4');
        avaliacaoDaPessoa.innerHTML = elemento.avaliacao;
        divPessoa.appendChild(avaliacaoDaPessoa);



const comentarioDaPessoa = document.createElement('p');
        comentarioDaPessoa.innerHTML = elemento.comentario;
        divPessoa.appendChild(comentarioDaPessoa);
        areaFeedbacks.appendChild(divPessoa);
    });


};


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });