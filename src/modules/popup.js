const popup = (id, parentHtml) => {
  parentHtml.innerHTML = `
  <div class="popupBody">
    <img src="${id.pokemonData.sprites.front_default}" />
  </div>
  `;
};

export default popup;