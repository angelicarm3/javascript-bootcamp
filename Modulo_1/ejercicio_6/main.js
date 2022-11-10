const pokemons = [
    {
        pokemonName: 'Picachu',
        pokemonType: 'Electric',
    },
    {
        pokemonName: 'Charmander',
        pokemonType: 'Fire',
    },
    {
        pokemonName: 'Bulbasur',
        pokemonType: 'Plant',
    },
];

pokemons.forEach(pokemon => {
    if (pokemon.pokemonType === 'Fire') {
        console.log('¡Es un pokemon de fuego!');
    }
    else {
        console.log('No es un pokemon de fuego :(')
    }
});