import commentCounter from "./commentCount";

const commentList = (eve, commentSection) => {
  const temp = `${eve.creation_date} ${eve.username}: ${eve.comment}`;
  const permanent = document.createElement('li');
  permanent.innerHTML = temp;
  commentSection.appendChild(permanent);
  const header = document.querySelector('.head');
  header.innerHTML = commentCounter('.test li');
};

export default commentList;