
async function fetchPokemon() {
    
    let name = document.getElementById('pokemonname').value;
    try {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+ name);
        const data = await response.json();
        console.log(data.name);
       // displayPokemon(data.message);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to fetch Pokémon sprite by name or ID
async function getPokemonSprite(pokemonNameOrId) {
    try {
      // Fetch data from the PokéAPI
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
      
      if (!response.ok) {
        throw new Error(`Pokémon not found: ${pokemonNameOrId}`);
      }
  
      const data = await response.json();
  
      // Extract the sprite URL (default front sprite)
      const spriteUrl = data.sprites.front_default;
  
      if (spriteUrl) {
        console.log(`Sprite URL for ${pokemonNameOrId}: ${spriteUrl}`);
        return spriteUrl;
      } else {
        console.log(`No sprite available for ${pokemonNameOrId}`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching Pokémon sprite: ${error.message}`);
    }
}

const handleImages = async () => {
    const imageContainer = document.getElementById('images');
    try {
        const spriteUrl = await getPokemonSprite();
        imageContainer.innerHTML = `
        <img src= "${pokemonNameOrId}: ${spriteUrl}" alt="image of pokemon">
        `;
    } catch (error) {
        console.error(`Error handling images:`, error);
    }
}
const updateImages = () => {
    handleImages();
};
updateImages();
