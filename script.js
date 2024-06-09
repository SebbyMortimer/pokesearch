function LoadPokemon() {
    const searchBox = document.getElementById("SearchBox");
    const image = document.getElementById("PokemonImage");

    const nameNoPunc = searchBox.value.replace(/[^\w\s]/g, '');
    const nameWithDashes = nameNoPunc.replace(/\s+/g, '-');
    const finalName = nameWithDashes.toLowerCase();

    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    var pokeUrl = apiUrl.concat(finalName);
    fetch(pokeUrl).then(response => {
        return response.json();
    }).then(data => {
        let sprite = data.sprites.other["official-artwork"]["front_default"];
        image.src = sprite;
    }).catch(err => {
        window.alert(searchBox.value.concat(" is not a valid Pokemon."));
    });
};

function EnterPressed() {
    if (event.key == "Enter") {
        LoadPokemon();
    }
};
