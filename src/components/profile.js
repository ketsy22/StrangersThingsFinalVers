fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);