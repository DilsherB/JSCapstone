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

  // Create HTML for each item
  listItem.innerHTML = `
    <img class="item-image" src="${pokemonData.sprites.front_default}">
        <span class="item-name">Name: ${pokemonData.name}
        <div id = "like">
        <button class="like-button">
        <i class="fa fa-light fa-heart"></i>
        </button>
        <span class="badge">0</span>Likes
        </div></span>
        <div class = "like-comment"> 
        <button class = "comments">Comment</button>
        <button class = "reservation">reservation</button>
       </div>
      `;

  // Add event listener to the like button

  const likeButton = listItem.querySelector(".like-button");
  const likeCount = listItem.querySelector(".badge");
  likeButton.addEventListener("click", async () => {
    try {
      // Fetch the API response and increment likes count

      const response = await fetch(`${INVOLVE_API}${pokemonData.id}`);
      const data = await response.json();
      const item = data.find((item) => item.item_id === pokemonData.id);
      if (item && item.likes !== undefined) {
        const newLikesCount = item.likes + 1;
        likeCount.textContent = newLikesCount;
      } else {
        throw new Error("Error: 'likes' property not found in API response.");
      }

      // Update the API with the new likes count

      const updatedResponse = await fetch(`${INVOLVE_API}${pokemonData.id}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            item_id: pokemonData.id
          }
        )
      });
      //return updated response
      return updatedResponse;
    } catch (error) {
      // Throw an error if any occurs
      throw new Error(`Error occurred while updating likes: ${error.message}`);
    }
  });

  return listItem;
}

export default showPokemon;
