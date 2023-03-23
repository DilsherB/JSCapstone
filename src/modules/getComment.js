import commentCounter from "./commentCount";
import commentList from "./commentList";

const getComment = (commentId, arr) => {
  const id = commentId;
  const commentRes = async () => {
    const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jSvbwvFa0M2a3HGwtKaG/comments?item_id=${id}`)
    const res = data.json();
    return res;
  }
  commentRes().then((each) => {
    const commentSection = document.querySelector('.test');
    arr.push(...arr, ...each);
    each.map((e) => {
      commentList(e, commentSection);
      const header = document.querySelector('.head');
      header.innerHTML = commentCounter('.test li');
      return e;
    });
  });
};

export default getComment;