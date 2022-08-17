import React, {useState} from 'react'

const CreatingPost = (posts, setPosts) => {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState('');

    const  handleSubmit = async (evt) => {
        evt.preventDefault();
        const token = window.localStorage.getItem('token')
            const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                        willDeliver: true
                    }
                })
            });
         const data = await response.json();
         console.log('data: ', data); 
         setPosts([data, ...posts]); 
         setDescription('');
         setPrice('');
         setTitle('');

    }
    return <>
        <h3> Create a Post:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange= {(evt) => setTitle(evt.target.value)}></input>
            <input type="text" placeholder="description" value={description} onChange={(evt) => setDescription(evt.target.value)}></input>
            <input type="text" placeholder="price" value={price} onChange={(evt) => setPrice(evt.target.value)}></input>
            <input type="text" placeholder="Delivery Type" value={willDeliver} onChange={(evt) => setWillDeliver(evt.target.value)}></input>
            <button type="submit" className="btn-outline-primary">Submit</button>
        </form>
    </>
}
export default CreatingPost;