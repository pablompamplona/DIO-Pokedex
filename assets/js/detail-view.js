


function loadPokemonDetailView(id) {
    const detailView = document.getElementById('detailView')
    pokeApi.getPokemonToView(id).then((pokemon) => {
        let newView = `
        <span class="material-symbols-outlined" onclick="backToList()">
                    arrow_back
                </span>
                <div class="headerDetail">
                    <div class="leftSide">
                        <span class="pokemonName">${pokemon.name}</span>
                        <span class="pokemonTypes">
                            ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
                        </span>  
                    </div>
                    <div class="rigthSide">#${pokemon.id}</div>
                </div>  
                <div class="img">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <div class="dataViewBox">
                    <div class="dataView">
                        <div class="about">
                            <h4>About</h4>
                            <span>Species: ${pokemon.species}</span>
                            <span>Height: ${pokemon.height}</span>
                            <span>Weight: ${pokemon.weight}</span>
                            <span>Abilities: ${pokemon.abilities}</span>
                        </div>
                        <div class="baseStats">
                            <h4>Stats</h4>
                            <span>HP: ${pokemon.base_stats[0]} </span>
                            <span>Attack: ${pokemon.base_stats[1]}</span>
                            <span>Defense: ${pokemon.base_stats[2]}</span>
                            <span>Sp Attack: ${pokemon.base_stats[3]}</span>
                            <span>Sp Defense: ${pokemon.base_stats[4]}</span>
                            <span>Speed: ${pokemon.base_stats[5]}</span>
                        </div>
                    </div>
                </div>
                <span class="footerPokeLogo">
                    <img src="./assets/img/pokemon-logo-png-1447.png" alt="logo">
                </span>`;
                document.getElementById('detailView').className = `detailView ${pokemon.types[0]}`;
                detailView.innerHTML = newView;
    })
    
}

function openView() {
    var url = window.location.href;
    url = url.split('?');
    id = url[1];
    loadPokemonDetailView(id);
}

function backToList() {
    window.location.href = "http://127.0.0.1:8080";
}

openView();
