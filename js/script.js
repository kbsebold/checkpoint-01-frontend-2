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
    let nomeCompleto = document.querySelector('#full-name');
    let quantidade = document.querySelector('#animals-quantity');
    let tipoAnimais =document.querySelectorAll('#animal-type');
    let tipos = Array.from(tipoAnimais);
    let tipo = tipos.find((tipo) => tipo.checked);

    let listaGeneros = document.querySelectorAll('#gender');
    let generos = Array.from(listaGeneros);
    let genero = generos.find((genero) => genero.checked);

    let fotoPessoa = document.querySelector('#person');

    let termos = document.getElementById('responsabilidade');

           
    let elemento = document.createElement("div");
    elemento.setAttribute('class','fundo');
    elemento.innerHTML = `
        <p class="dados">Nome completo:<b> ${nomeCompleto.value}</b></p>
        <p class="dados">Quantidade de pets:<b> ${quantidade.value}</b></p>
        <p class="dados">Tipo de Animal: <b>${tipo.value}</b></p>
        <p class="dados">Gênero do animal:<b>${genero.value}</b></p>
        <div class="imagem">
            <p class="dados">Sua foto:</p>
            <img class="foto-pessoa" src="${fotoPessoa.value}" alt="" width="50%">
        </div>
        <p class="dados"> ${termos.checked} </p>
    `;

    document.querySelector(".retorno").appendChild(elemento);
    }


