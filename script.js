

let tamanho = 100;

function modoNoturno(){
    document.body.classList.toggle("dark-mode");
}

function aumentarFonte(){
    tamanho += 10;
    document.body.style.fontSize = tamanho + "%";
}
