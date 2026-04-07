import './Style.css';
import logo from './assets/logo.jpg';
import { render } from './modules/populate';
import { renderpopup } from './modules/popup';
import { countLikes } from './modules/likes';
import itemsCounter from './modules/itemsCounter';

// document.addEventListener('DOMContentLoaded', () => {
// This code will run after the DOM is fully loaded
// import getCommentsCount from './modules/comments-counter';

document.getElementById('logo-img').setAttribute('src', logo);
render(); // Call the render function after setting the logo src

const heartIcons = document.querySelectorAll('.fa-heart');
const spanItems = document.querySelectorAll('.itemCount');
// Add the number of items in the span.
spanItems.forEach((span) => {
  span.textContent = ` (${itemsCounter()})`;
});

heartIcons.forEach((icon) => icon.addEventListener('click', (event) => {
  alert('likes ');
  countLikes(event);
  event.target.classList.add('animation-heart');
  // Selects the span element next to the icon.
  const span = event.target.previousElementSibling;
  // Retrieves the number of likes and increment it by 1.
  let count = Number(span.textContent.replace('likes', ''));
  span.textContent = `${(count += 1)} likes`;
}));

// items counter is returning 0
// heart.forEach((icon) => icon.addEventListener('click', (event) => {

//   alert('I was called');

//   countLikes(event);

//  // event.target.classList.add('animation-heart');
//   // Selects the span element next to the icon.
//   const span = event.target.previousElementSibling;
//   //const span=document.querySelectorAll('.likesCount');
//   // Retrieves the number of likes and increment it by 1.
//   let count = Number(span.textContent.replace('likes', ''));
//   span.textContent = `${count += 1} likes`;
// }));

// Add a click event listener to a parent element that contains the .commentBtn buttons
document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('commentBtn')) {
    const btn = event.target;
    //      alert('Button clicked: ' + btn.textContent); // Debugging alert
    const { id } = btn.parentElement.parentElement;
    renderpopup(id);
    // const commentsCountCon = document.querySelector('.commentsCount');
    // commentsCountCon.textContent = `(${getCommentsCount()})`;
  }
  // });

  // --------event listener for heart like button---//
});

//   const heart = document.querySelectorAll('.likeBtn');

// const spanItems = document.querySelectorAll('.itemCount'); // to be updated on the wepage

// spanItems.values=` (${itemsCounter()})`;
// //Add the number of items in the span.
// // spanItems.forEach((span) => {
// //   span.textContent = ` (${itemsCounter()})`;
// //   spanItems.values=span.textContent;

// // });

//   // counting likes, displaying likes and updating
