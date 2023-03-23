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
  
    // Create list items for each Pokemon
    for (const pokemonData of pokemonDataArray) {
      const listItem = await createListItem(pokemonData);
      likeableItems.appendChild(listItem);
    }
  }
  

async function createListItem(pokemonData) {
  const listItem = document.createElement("li");

  // Fetch the API response to get the current likes count
  const response = await fetch(`${INVOLVE_API}${pokemonData.id}`);
  const data = await response.json();
  const item = data.find((item) => item.item_id === pokemonData.id);
  let numOfLikes = item ? item.likes : 0;

  // Create HTML for each item
  listItem.innerHTML = `
    <img class="item-image" src="${pokemonData.sprites.front_default}">
        <span class="item-name">Name: ${pokemonData.name}
        <div id = "like">
        <button class="like-button">
        <i class="fa fa-light fa-heart"></i>
        </button>
        <span class="badge">${numOfLikes}</span>Likes
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
      // Increment likes count and update the like count text
      numOfLikes++;
      likeCount.textContent = numOfLikes;

      // Update the API with the new likes count
      const updatedResponse = await fetch(`${INVOLVE_API}${pokemonData.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id: pokemonData.id,
          likes: numOfLikes,
        }),
      });

      // Handle any errors that may occur
      if (!updatedResponse.ok) {
        throw new Error("Failed to update likes count.");
      }
    } catch (error) {
      // If there is an error, revert the like count back to the previous count
      numOfLikes--;
      likeCount.textContent = numOfLikes;
      console.error(error);
    }
  });

  return listItem;
}
export default showPokemon