async function showAbilities() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0"
  );
  const data = await response.json();

  const abilitiesList = document.querySelector("#type-abilities");

  const promises = data.results.map((pokemon) => {
    return fetch(pokemon.url).then((res) => res.json());
  });

  const pokemonDataArray = await Promise.all(promises);

  pokemonDataArray.forEach((pokemonData) => {
    const abilities = pokemonData.abilities
      .map((ability) => ability.ability.name)
      .join(", ");
    const types = pokemonData.types.map((type) => type.type.name).join(", ");

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="pokemon-name">${pokemonData.name}</span>
      <span class="pokemon-types">${types}</span>
      <span class="pokemon-abilities">${abilities}</span>
    `;
    abilitiesList.appendChild(listItem);
  });
}

export default showAbilities;
