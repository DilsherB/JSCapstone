const pokemonsNav = document.querySelector('.pokemon-nav')
const typeNav = document.querySelector('.type-nav')
const statsNav = document.querySelector('.stats-nav')
const pokemonsDisplay = document.querySelector('#pokemon')
const typesDisplay = document.querySelector('#type-abilities')
const statsDisplay = document.querySelector('#stats')
const navbarHandler = () => {
    // Default State of the homepage
    pokemonsDisplay.style.display = "block";
    typesDisplay.style.display = "none";
    statsDisplay.style.display = "none"
    //Adding event listner to the pokemon nav item
    pokemonsNav.addEventListener('click',()=>{
        pokemonsDisplay.style.display = "block";
        typesDisplay.style.display = "none";
        statsDisplay.style.display = "none"
    })
    //Adding event listner to the types & abilities nav item
    typeNav.addEventListener('click',()=>{
        pokemonsDisplay.style.display = "none";
        typesDisplay.style.display = "block";
        statsDisplay.style.display = "none"
    })
    //Adding event listner to the stats nav item
    statsNav.addEventListener('click',()=>{
        pokemonsDisplay.style.display = "none";
        typesDisplay.style.display = "none";
        statsDisplay.style.display = "block"
    })
};
export default navbarHandler;
