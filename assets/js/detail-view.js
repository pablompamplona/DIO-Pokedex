
const detailView = document.getElementById('detailView')

function loadPokemonDetailView(id) {
    pokeApi.getPokemonToView(id);
    const newView = (pokemon) => `
    <span class="material-symbols-outlined">
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
                        <span>Species: </span>
                        <span>Height: </span>
                        <span>Weight: </span>
                        <span>Abilities: </span>
                    </div>
                    <div class="baseStats">
                        <span>HP: </span>
                        <span>Attack: </span>
                        <span>Defense: </span>
                        <span>Sp Attack: </span>
                        <span>Sp Defense: </span>
                        <span>Speed: </span>
                        <span>Total: </span>
                    </div>
                </div>
            </div>
            <span class="footerPokeLogo">
                <img src="./assets/img/pokemon-logo-png-1447.png" alt="logo">
            </span>`;
            detailView.innerHTML = newView;
}

function openView() {
    var url = window.location.href;
    url = url.split('?');
    id = url[1];
    loadPokemonDetailView(id);
}

openView();
