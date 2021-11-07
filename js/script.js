// selecionar dado do primero campo
let nomeCompleto = document.querySelector('#full-name');
// selecionar dado do segundo campo
let quantidade = document.querySelector('#animals-quantity');
// selecionar dado do terceiro campo
let generos = document.querySelector('#genre');
//selecionar o quarto campo
let tipoAnimais = document.querySelector('animal-type');
//selecionar o campo do link da foto
let fotoPessoa = document.querySelector('#person');
// selecionar o primeiro h1
let fraseLogo = document.querySelector('h1');
// fazer o h1 mudar de cor quando o mouse passar por cima
fraseLogo.onmouseover = mudarCor;

function mudarCor(){
    fraseLogo.style.color = "";
}

// selecionar o elemento do botao
let botaoEnviar = document.querySelector('#btn');

botaoEnviar.addEventListener('click', inserirLista);

function inserirLista(event) {
    event.preventDefault();

    let dado = document.createElement('p');
    dado.innerText = "Nome completo: " + nomeCompleto.value;
    document.querySelector('.retorno').appendChild(dado);

    let numeroAnimais = document.createElement('p');
    numeroAnimais.innerText ="Quantidade desejada de animais: " + quantidade.value;
    document.querySelector('.retorno').appendChild(numeroAnimais);

    let pet = document.createElement('p');
    pet.innerText = "Tipo de animal: " + tipoAnimais.value;
    document.querySelector('.retorno').appendChild(pet);

    for (let i = 0; i > generos.length; i++) {
        if (generos[i].checked){
            genero = generos[i].value;

            if (genero == "fem") {
                genero = "Fêmea";
            } else if (genero == "male") {
                genero = "Macho";
            } else if ( genero == "whatever") {
                genero = "Tanto Faz";
            } else {
                genero = "Não se aplica";
            }
            break;
        }
    }

    let generoAnimal = document.createElement('p');
    generoAnimal = genero;
    document.querySelector('.retorno').appendChild(generoAnimal);


    let img = document.createElement('img');
    img.setAttribute('src', fotoPessoa.value);
    document.querySelector('.retorno').appendChild(img);
    img.style.width ='50%';

}