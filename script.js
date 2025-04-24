
async function fetchPokemon() {
    let name = document.getElementById('pokemonname').innerHTML;

    try {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+ name);
        const data = await response.json();
        console.log(data.name);
       // displayPokemon(data.message);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


function displayPokemon(images) {
    const gallery = document.getElementById("gallery");


    const pokemonCards = images.map(imageUrl => `
        <div class="card">
            <img src="${imageUrl}" alt="Pokemon picture">
        </div>
    `).join("");

    gallery.innerHTML = pokemonCards; // Inject the generated HTML into the gallery
}
//https://dog.ceo/api/breeds/image/random/5









//document.getElementById("name-container").textContent = `Name: ${name}`