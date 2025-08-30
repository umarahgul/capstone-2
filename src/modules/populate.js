import { retrieveLikes } from './likes';

export const itemCount = [];

const url = 'https://api.tvmaze.com/shows';

// fetch datd from api
const getData = async () => {
  try {
    const response = await fetch(url); // Fetch data from api endpoints
    const data = await response.json(); // Change the data format to json

    return data;
  } catch (error) {
    return error.message;
  }
};

export const render = async () => {
  

  const tvShowsDiv = document.getElementById('movies');

 const data = await getData();
const topThree = data
  .sort((a, b) => b.rating.average - a.rating.average)
 .slice(0, 6);



  for (let x = 0; x < topThree.length; x += 1) {
    const poster = topThree[x].image.medium;
    const title = topThree[x].name;
    const { id } = topThree[x];

    // a div containing image button and title
    const showDiv = document.createElement('div');
    showDiv.id = `${id}`;
    showDiv.classList.add('series');
    // comparing to find the matching ids

    //  ---------  PROBLEM ------------------//
   // const serieLike = likesCount.find((obj) => obj.item_id === `${id}`);
    //const count = !serieLike ? 0 : serieLike.likes;

    // alert(`value of count${count.likes}`);

    // Handle the case when serieLike is not found
    console.error(`No likes data found for item_id: ${id}`);

    const posterImg = document.createElement('img');
    posterImg.src = poster;
    // const icons = document.createElement('span');

    //const likesCount = await retrieveLikes(); // likesCount craeted
  // if(likesCount) {alert('successful');}
 

    // a container containing title
    const titleContainer = document.createElement('div');
    const showName = document.createElement('h2');
    const likes = document.createElement('i');
    likes.classList.add('fa-solid', 'fa-heart', 'likeBtn');

    const spanLikes = document.createElement('span');
    //spanLikes.classList.add('likesCount'); // in place of items-count
    spanLikes.textContent = 'likes :'; // edit this value and fetch for this value
    showName.textContent = title;

    // spanLikes.textContent = `Likes: ${count}`;

    titleContainer.appendChild(showName);
    titleContainer.appendChild(spanLikes);

    titleContainer.appendChild(likes);
    titleContainer.classList.add('div-title');

    // a container containing comments button
    const buttonContainer = document.createElement('div');
    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('id', `cmmnt + ${x}`);
    commentBtn.textContent = 'Comments';
    commentBtn.classList.add('commentBtn');
    buttonContainer.appendChild(commentBtn);

    showDiv.appendChild(posterImg);
    showDiv.appendChild(titleContainer);
    showDiv.appendChild(buttonContainer);
    tvShowsDiv.appendChild(showDiv);

    // likes.onclick=async function(){
    //   try {

    //       const response = await countLikes(event);
    //       if (response.ok) {
    //         // Successfully liked the item, update the count in the UI
    //         spanLikes.textContent = `Likes: ${count + 1}`;
    //         alert('likes ' + spanLikes.textContent);
    //       } else {
    //         // Handle errors if needed
    //         console.error('Failed to like the item:', response.status, response.statusText);
    //       }
    //     } catch (error) {
    //       console.error('Failed to retrieve likes:', error.message);
    //     }

    // }
  }
};
