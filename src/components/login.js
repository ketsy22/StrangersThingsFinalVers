import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (evt) => {
      evt.preventDefault(); 
      
    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
              body: JSON.stringify({
                  user: {
                      username: username,
                      password: password
                  }
          })
      })

      const data = await response.json();  
          window.localStorage.setItem('token', data.data.token);
          setUsername('');
          setPassword(''); 
          return data; 
      } catch (error) {
          console.log(error); 
      }
} 

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <h2>Existing user sign in:</h2>
              <label>Username: </label>
              <input type="text" value={username} onChange={(evt) => 
                  setUsername(evt.target.value)
              }>
              </input>

              <label>Password:</label>
              <input type="text" value={password} onChange={(evt) =>                  
                  setPassword(evt.target.value) 
              }></input>

              <button type="submit">Login</button>
          </form>
          <br/>
          <div>
            <h3>
              Not Registered? Click here to <Link to="/register">Register</Link>
          </h3> 
        </div>
      </div>
  )
}
