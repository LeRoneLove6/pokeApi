
async function fetchPokemon() {
    
    let name = document.getElementById('pokemonname').value;
    try {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+ name);
        const data = await response.json();
        console.log(data.name);
       // displayPokemon(data.message);

       //save the pokemon name.
       let pokemon_name = data.name;
       //save the pokemon image url.

       let pokemon_image_url = data.sprites.front_default;
       //retrieve the paragraph element with an id of 'name'

       name_element = document.getElementById("name");
       // set its text to the pokemon name.

       name_element.innerHTML = pokemon_name;
       // retreive the paragraph element with an id of 'pokemonimage'

       image_element = document.getElementById("pokemonimage");
       //set its src attribute equal to the value of 'pokemon_image_url

       image_element.src = pokemon_image_url;

  

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
