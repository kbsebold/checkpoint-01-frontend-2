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

    termos.checked ? termosTxt = "Parabéns, vc está pronto(a) para adotar um pet! :)" : termosTxt = "Sugerimos que pesquise mais antes de adotar um pet :(";
   
    let elemento = document.createElement("div");
    elemento.setAttribute('class','fundo');
    elemento.innerHTML = `
        <div class="imagem">
            <img class="foto-pessoa" src="${fotoPessoa.value}" alt="">
        </div>
        <p class="nome"><b> ${nomeCompleto.value}</b></p>
        <p class="dados"><i>Deseja adotar:</i> <b> ${quantidade.value}</b> pet(s)</p>
        <p class="dados"><i> Tipo de Animal: </i> <b>${tipo.value}</b></p>
        <p class="dados"> <i> Gênero do animal: </i> <b>${genero.value}</b></p>
        <p class="dados centro" id="termo"> ${termosTxt} </p>
    `;

    document.querySelector(".retorno").appendChild(elemento);


}


