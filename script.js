

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

