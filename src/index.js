import React from 'react';
import  ReactDOM  from 'react-dom';
import ItemsList from './Items';
import Product from './product';
// import Cart from './cart';
import './style.css';
// import {BrowserRouter as Router, Route } from 'react-router-dom';

// const ReactRouterSetup=()=>{
//     return(
//         <Router>
//             <Route exact path='/'>
//                 <ItemsList/>
//             </Route>
//             <Route path='/product-1'>
//                 <Product/>
//             </Route>
//             <Route path='/cart'>
//                 <cart/>
//             </Route>
//         </Router>
//     )
// }

ReactDOM.render(<ItemsList/>,document.getElementById('root'))
ReactDOM.render(<Product/>,document.getElementById('product'))
// ReactDOM.render(<Cart/>,document.getElementById('cartid'))