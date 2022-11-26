
const pokemonList = document.getElementById('pokemonList')

const loadMoreButton = document.getElementById('loadMoreButton')

const openDetail = document.getElementsByClassName('pokemon')

const maxRecords = 151;
const limit = 12;
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>  `
        <li onclick="openDetailView(${pokemon.id})" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>  
        </li>   
    `).join('');

    pokemonList.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit) ;

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }
    else {
        loadPokemonItens(offset, limit);
    }
    
})

function openDetailView(id) {
    window.location.href = `http://127.0.0.1:8080/detail-view?${id}`;
}





  
