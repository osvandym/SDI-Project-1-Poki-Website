fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
      if(!response.ok){
        throw new Error("Invalid request");
      }
      return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error))
