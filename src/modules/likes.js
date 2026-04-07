export const countLikes = async (event) => {
  try {
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lINXvG4po4JIGou1lt06/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${event.target.parentNode.parentNode.parentNode.id}`,

      }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    return error.message;
  }
};

export const retrieveLikes = async () => {
  try {
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/lINXvG4po4JIGou1lt06/likes', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  } catch (error) {
    return error.message;
  }
};
