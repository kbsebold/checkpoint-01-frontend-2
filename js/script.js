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

    let termos = document.querySelector('#responsabilidade');
    if (termos.on) {
        "Parabéns, vc está pronto para adotar pets!"
    }

    console.log(termos.on);
           
    let elemento = document.createElement("div");
    elemento.innerHTML = `
        <p class="dados">Nome completo: ${nomeCompleto.value}</p>
        <p class="dados">Quantidade de pets: ${quantidade.value}</p>
        <p class="dados">Tipo de Animal: ${tipo.value}</p>
        <p class="dados">Gênero do animal:${genero.value}</p>
        <div class="imagem">
            <p class="dados">Sua foto:</p>
            <img class="foto-pessoa" src="${fotoPessoa.value}" alt="" width="50%">
        </div>
        <p class="dados"> ${termos} </p>
    `;

    document.querySelector(".retorno").appendChild(elemento);
    }


