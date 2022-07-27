import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';


// export { default as Home } from '/home';
// export { default as Profile } from '/profile';
// export { default as Login } from '/login';


const App = () => {
    return (
        <div>
            <Router>
                {/*NavBar*/}
                <navbar>
                    <Link to="/home">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/login">Login</Link>
                   
                </navbar>
                {/*Main*/}
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/login" element={<Login/>} />
                
                    <Route path="*" element={<ErrorMessage />} />
                </Routes>
                {/* Footer */}
                <footer>
                    <p>This is the footer.</p>
                </footer>
            </Router>
        </div>
    )
    return App()
}

const Homeelement = ()=> {
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

// // Ternary Operator - a fancy if/else statement
// // whatIsYourLogicalCondition ? ifTruthyDoThis : ifFalseyDoThis

// // [{}, {}, {}]

    return (
        <div>
             {
                posts.length ? posts.map((post, idx) => {
                    return <div>
                        <h3>{post.title}</h3>
                        <div>{post.body}</div>
                        </div>
                }) : <div>No posts</div>
            }
        </div>
    )
    
}
const Creating = (posts, setPosts) => {
    const [title, setTitle] = useState([]); 
    const [body, setBody] = useState([]);
    
    const  handleSubmit = async (evt) => {
        evt.preventDefault();
            const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'Applications/json',
                },
                body: JSON.stringify({
                    title,
                    body,
                })
            });
         const data = await response.json();
         console.log('data: ', data);  
         setPosts([data, ...posts]);   

    }
    return <>
        <h3> Create Post</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange= {(evt) => setTitle(evt.target.value)}></input>
            <input type="text" placeholder="body" value={body} onChange={(evt) => setBody(evt.target.value)}></input>
            <button type="submit" className="btn-outline-primary">Submit</button>
        </form>
    </>
}
const element = document.getElementById('myComponents');
ReactDOM.render(<Homeelement/>, element)










// const House =  () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         const fetchProductData = async () => {
//             console.log("hi")
//             try { 
//                 const response = await fetch ('https://dummyjson.com/products');
//                 const data = await response.json();
//                 console.log(data.products)
//                 setProducts(data.products)
//             } catch (error){
//                 console.log(error);
//             }
            
//         }
//         fetchProductData()
//     },[]);

//     return (
//         <div>
//             {
//                 products.length ? products.map((products, idx) => {
//                     return <div>
//                         <p>{products.images}</p>
//                         </div>
//                 }) : <div>No posts</div>
//             }
//             <p> hi ketsy</p>
//         </div>
//     )
// }


// const element = document.getElementById('myComponents');
// ReactDOM.render(<House />, element)

// // Array
// const arr = ['a', 'b', 'c']

// // Array notation
// const elementInArr = arr[2]
// const Bathroom = () => {
//     const [carts, setCarts] = useState([]);
//     useEffect(() => {
//         const fetchCartData = async () => {
//             try {
//                 const response = await fetch('https://dummyjson.com/carts');
//                 const data = await response.json();
               
//                 setCarts(data.carts)
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchCartData()
//     }, []);
//     return (
//         <div>
//             <div>
//                 <p>test test</p>
//             </div>
//             {
//                 carts.length ? carts.map(
//                     (cart, idx) => {
//                         // console.log(currentCart)

//                         return <div>
//                             <p>{cart.id}</p>
//                             <p>{cart.total}</p>
//                             </div>

//                     }) : <div>No posts</div>
//             }
//         </div>
//     )
// }
