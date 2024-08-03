// // components/Cart.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { useSelector, useDispatch } from 'redux';

// import { addToCart, removeFromCart } from '../actions/cartActions';
// import './Cart.css';

// const Cart = () => {
//   const cart = useSelector(state => state.cart);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => dispatch(removeFromCart(item.id))}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => dispatch(addToCart({ id: 1, name: 'Product 1' }))}>
//         Add Product 1
//       </button>
//     </div>
//   );
// };

// export default Cart;

// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import './Cart.css';  // Import the CSS file

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            {item.name}
            <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button className="add-button" onClick={() => dispatch(addToCart({ id: 1, name: 'Product 1' }))}>
        Add Product 1
      </button>
    </div>
  );
};

export default Cart;