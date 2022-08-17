import React, { useEffect, useState } from "react";

const SingleUserPosts = () => {
    const [singlePosts, setSinglePosts] = useState([]);

    useEffect(() => {
        const fetchSinglePosts = async () => {
            try{
            evt.preventDefault();
            const token = window.localStorage.getItem('token')
            const response = await fetch ('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts/${token}/messages', {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                content: ""
                }
            })
        })
            const posts = await response.json();
                console.log('data: ', posts);
                setSinglePosts(data.data.posts); 
                return posts;
        } catch(error){
            throw error;
        }
    }
    fetchSinglePosts();
}, [singlePosts]);
return(
        <div>
            <div>
            {
            posts.length ? posts.map((post, idx) => {
            return <div key={post.id}>
                    <h3>{post.title}</h3>
                    <div>Details: {post.description}</div>
                    <div>Price: {post.price}</div>
                    </div>
            }) : <div>Where are my posts???</div>
            }
            </div>
        </div> 
    )
} 
export default SingleUserPosts;