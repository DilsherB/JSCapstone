import itemsCounter from './itemCounter.js';

export default async function renderData(arr) {
  const ourArr = await arr;
  const list = document.querySelector('.items-list');
  list.innerHTML = '';
  if (ourArr.length > 0) {
    ourArr.forEach((obj) => {
      list.innerHTML += `<li data-id='${obj.id || 0}'> 
            <img src='${obj.image.original}' alt='poster' />
            <span class="title-wrapper">${obj.name} <i class="fa-regular fa-heart likeBtn" onClick="addLike(${obj.id})"></i></span>
            <span class="likes">${obj.likes} likes</span>
            <button class="comments" onclick="activePopUp(${obj.id});">Comments</button>
            </li>`;
    });
    document.querySelector('.count').innerHTML = itemsCounter('.items-list li');
  }
}
