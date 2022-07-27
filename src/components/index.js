import {Header, AllPosts } from './components/index';
export { default as Homepage } from './Homepage';

fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  body: JSON.stringify({
    post: {
      title: " ",
      description: ".",
      price: "$",
      willDeliver: true
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);