const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0";
const INVOLVE_API =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNcbFL1NPb8wUFbHRoP3/likes?item_id=";
async function showPokemon() {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  const likeableItems = document.getElementById("likeable-items");

  const promises = data.results.map((pokemon) => {
    return fetch(pokemon.url).then((res) => res.json());
  });

  const pokemonDataArray = await Promise.all(promises);

  pokemonDataArray.forEach((pokemonData) => {
    const listItem = createListItem(pokemonData);
    likeableItems.appendChild(listItem);
  });
}

function createListItem(pokemonData) {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <img class="item-image" src="${pokemonData.sprites.front_default}">
        <span class="item-name">Name: ${pokemonData.name}</span>
        <span class="item-name">Weight: ${pokemonData.weight}</span>
        <div class = "like-comment">
        <button class = "comments">Comment</button>
        <button class="like-button">
          Like <span class="badge">0</span>
        </button></div>
      `;
  const likeButton = listItem.querySelector(".like-button");
  const likeCount = listItem.querySelector(".badge");
  likeButton.addEventListener("click", async () => {
    try {
      const response = await fetch(`${INVOLVE_API}${pokemonData.id}`);
      const data = await response.json();

      const item = data.find((item) => item.item_id === pokemonData.id);
      if (item && item.likes !== undefined) {

        const newLikesCount = item.likes + 1; // increment likes count
        likeCount.textContent = newLikesCount;
      } else {
        throw new Error("Error: 'likes' property not found in API response.");
      }
    } catch (error) {
      throw new Error(error);
    }
  });
  
  return listItem;
}


export default showPokemon;
