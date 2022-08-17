import React, {useState, useEffect} from 'react';
import CreatingPost from './createpost';

const Posts = ({posts})=> {

    return (
        <div>
            <CreatingPost/>
            <div>
            {
                posts.length ? posts.map((post, idx) => {
                    return <div key={post.id}>
                        <h3>{post.title}</h3>
                        <div>Details: {post.description}</div>
                        <br/>
                        <div>Price: {post.price}</div>
                        
                        </div>
                        
                }) : <div>No Posts</div>
            }
            </div>
        </div>  
    )
}
export default Posts;