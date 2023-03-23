const addComment = (id, name, comment) => {
  const add = async () => {
    const comments = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jSvbwvFa0M2a3HGwtKaG/comments',
    {
      method: 'post',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: comment,
      }),
      headers: { 'content-type': 'application/json' },
    });
    const data = await comments.text();
    return data;
  };
  add();
};

export default addComment;