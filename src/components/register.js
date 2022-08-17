import React, {useState} from "react";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (evt) => {
        evt.preventDefault(); 
        
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/users/register', {
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
            console.log(data); 
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
                <p>Register for new account here:</p>
                <label>Username: </label>
                <input type="text" placeholder="create a username" value={username} onChange={(evt) => 
                    setUsername(evt.target.value)
                }>
                </input>
                <label>Password:</label>
                <input type="text" placeholder="create a password" value={password} onChange={(evt) => 
                    setPassword(evt.target.value) 
                }>
                </input>
  
                <button type="submit">Register for new account</button>
            </form>
        </div>
    )
  }
  export default Register;