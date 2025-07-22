


//  fetch('https://pokeapi.co/api/v2/pokemon/?limit=1302')

function fetchData() {
  let pokemonName = document.getElementById("inputPokemonName").value.toLowerCase();
  console.log(pokemonName)
  const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    // console.log(fetchUrl)
    fetch(fetchUrl)
      .then (response => response.json())
        // .then(data => console.log(data.sprites.front_default))
      .then(data => {
        let pokeUrl = data.sprites.front_default
        console.log(pokeUrl)
        document.getElementById("pokemonSprite").src= pokeUrl

      })

}
















































