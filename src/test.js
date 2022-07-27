// import React, {useState, useEffect} from 'react'
// import ReactDOM from 'react-dom'

// const Bathroom = () => {
//     const [carts, setCarts] = useState([]);
//     useEffect(() => {
//         const fetchCartData = async () => {
//             try {
//                 const response = await fetch('https://dummyjson.com/carts');
//                 const data = await response.json();
//                 setCarts(data.products[0].id)
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
//                     (carts, idx) => {
//                         return <div>
//                             <p>{carts.id}</p>
//                             </div>
//                     }) : <div>No posts</div>
//             }
//         </div>
//     )
// }
// const element = document.getElementById('myComponents');
// ReactDOM.render(<Bathroom/>, element)

