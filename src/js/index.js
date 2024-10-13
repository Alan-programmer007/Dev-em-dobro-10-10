const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        //Cartão
        const cartaoPokemonAtiva = document.querySelector(".ativa")
        cartaoPokemonAtiva.classList.remove("ativa")
        const idPokemonSelecionado = pokemon.attributes.id.value;
        const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
        const cartaoPokemonAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
        cartaoPokemonAbrir.classList.add("ativa");
        //Botão
        const pokemonAtivoListagem = document.querySelector(".ativo");
        pokemonAtivoListagem.classList.remove("ativo");
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add("ativo")
    })
});