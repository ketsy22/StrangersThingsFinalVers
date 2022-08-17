import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Posts from './components/posts';
import Home from './components/home';
import Profile from './components/profile';
import {Login} from './components/login';
import Register from './components/register';

const App = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts');
                const data = await response.json();
                setPosts(data.data.posts);               
            } catch (error) {
                console.log(error);
            }
        };
        fetchPostData();
    }, []);

    return (
        <div>  
            <div>
                <h1>Stranger's Things</h1>            
                <br/>              
            </div>
            <div className='navbar' style={{"display": "flex", "flexDirection": "space-evenly"}}>
                <Link style={{"padding": "5px"}} to="/">Home</Link>
                <Link style={{"padding": "5px"}} to="/profile">Profile</Link>
                <Link style={{"padding": "5px"}} to="/login">Login</Link>       
            <h3 style={{backgroundColor: "lightcoral"}}>
            </h3>
            </div>
            <Routes>
                <Route path='/' element = {<Home/>} />
                <Route path ="/posts" element={<Posts posts={posts}  />} />
                <Route path ="/profile" element= {<Profile posts={posts}/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />  
            </Routes>
            <br/>
            <br/>
            <br/>
            <br/>
            <footer>
                <h3>This is the footer.</h3>
            </footer> 
         
        </div>
    )  
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
<Router>
 <App/>
</Router>

); 