async function showStats() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0"
    );
    const data = await response.json();
  
    const statsList = document.querySelector("#stats");
  
    const promises = data.results.map((pokemon) => {
      return fetch(pokemon.url).then((res) => res.json());
    });
  
    const pokemonDataArray = await Promise.all(promises);
  
    pokemonDataArray.forEach((pokemonData) => {
      const stats = pokemonData.stats
        .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
        .join(", ");
  
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span class="pokemon-name">${pokemonData.name} :-</span>
        <span class="pokemon-stats">${stats}</span>
      `;
      statsList.appendChild(listItem);
    });
  }
  
  export default showStats;
  