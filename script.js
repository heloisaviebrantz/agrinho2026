

let tamanho = 100;

function modoNoturno(){
    document.body.classList.toggle("dark-mode");
}

function aumentarFonte(){
    tamanho += 10;
    document.body.style.fontSize = tamanho + "%";
}

const ctx = document.getElementById('graficoCarbono');

new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2022', '2023', '2024', '2025', '2026'],

        datasets: [{
            label: 'Mercado de Carbono (bilhões de dólares)',

            data: [1.1, 1.6, 2.3, 3.2, 4.1],

            borderColor: '#1B5E20',

            backgroundColor: 'rgba(46,125,50,0.2)',

            borderWidth: 4,

            fill: true,
            tension: 0.4
        }]
    },

    options: {

        responsive: true,

        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});

const botaoTopo = document.getElementById("topo");

window.onscroll = function(){

    if(window.scrollY > 300){

        botaoTopo.style.display = "block";

    }

    else{

        botaoTopo.style.display = "none";

    }

};

botaoTopo.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}; 

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revelar);

function revelar(){

    reveals.forEach((elemento)=>{

        const alturaJanela = window.innerHeight;

        const topoElemento = elemento.getBoundingClientRect().top;

        if(topoElemento < alturaJanela - 100){

            elemento.classList.add("ativo");

        }

    });

}

revelar(); 


const linksMenu = document.querySelectorAll('nav a[href^="#"]');

linksMenu.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 

const janelaCarbono = document.getElementById("janelaCarbono");

function abrirCarbono(){

    janelaCarbono.style.display = "flex";

    moverAzul ()

}

janelaCarbono.addEventListener("click", function(event){

    if(event.target === janelaCarbono){

        janelaCarbono.style.display = "none";

    }

});

const azul = document.getElementById("azul");

function moverAzul(){

    azul.style.right = "650px";

} 
