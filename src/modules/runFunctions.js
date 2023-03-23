import addComment from './addComment';
import commentCounter from './commentCount';
import commentList from './commentList';
import getComment from './getComment';

const runFunctions = (arr) => {
    const form = document.querySelector('form');
    const user = document.querySelector('#name');
    const comment = document.querySelector('#comment');
    const commentSection = document.querySelector('.test');

    form.addEventListener('submit', (eve) => {
        eve.preventDefault();
        const list = [];
        if(!user.value.trim() || !comment.value.trim) return;
        addComment(arr.pokemonData.id, user.value, comment.value);
        list.push({
            creation_date: '23/03/2023',
            username: user.value,
            comment: comment.value,
        });
        commentSection.innerHTML = '';
        list.map((ele) => commentList(ele, commentSection));
        getComment(arr.pokemonData.id, list);

        const header = document.querySelector('.head');
        header.innerHTML = commentCounter('.test li');
        form.reset();
    })
}