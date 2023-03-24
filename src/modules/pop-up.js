const main = document.querySelector('.main-section');

const activePopUp = (id) => {
  main.innerHTML = `<div class= "pop-body">
    <img src='${id.image.original}' alt='poster' />

    </div>`;
};

export default activePopUp;
