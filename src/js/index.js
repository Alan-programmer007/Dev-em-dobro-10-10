const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        //Cartão
        esconderCartaoPokemon();
        const idPokemonSelecionado = mostrarCartaoPokemon(pokemon);

        //Botão
        desativarPokemonNaListagem();
        ativaPokemonNaListagem(idPokemonSelecionado);
    })
});

function ativaPokemonNaListagem(idPokemonSelecionado) {
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokemonNaListagem() {
    const pokemonAtivoListagem = document.querySelector(".ativo");
    pokemonAtivoListagem.classList.remove("ativo");
}

function mostrarCartaoPokemon(pokemon) {
    const idPokemonSelecionado = pokemon.attributes.id.value;
    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
    const cartaoPokemonAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
    cartaoPokemonAbrir.classList.add("ativa");
    return idPokemonSelecionado;
}

function esconderCartaoPokemon() {
    const cartaoPokemonAtiva = document.querySelector(".ativa");
    cartaoPokemonAtiva.classList.remove("ativa");
}
