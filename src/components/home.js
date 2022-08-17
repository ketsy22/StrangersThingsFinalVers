import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
        
        <h2>Welcome to the Homepage!</h2>
        <br/>
        <h3>
        <Link to="/posts">Posts</Link> 
        </h3>
        </div>
    )
}
export default Home;