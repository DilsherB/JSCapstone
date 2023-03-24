export async function getData() {
  const response = await fetch('https://api.tvmaze.com/shows');
  const myJson = await response.json();

  const likesResponse = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4aTSjUAMwHbqF73Z3l5i/likes',
  );
  const likesJson = await likesResponse.json();

  const result = myJson.slice(6, 12);

  result.forEach((tvObj) => {
    tvObj.likes = 0;
  });
  result.forEach((tvObj) => {
    likesJson.forEach((likesObj) => {
      if (+tvObj.id === +likesObj.item_id) tvObj.likes = likesObj.likes;
    });
  });

  return result;
}

export default getData();
