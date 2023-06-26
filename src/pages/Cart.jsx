import '../assets/styles/cart.css';

import { Link } from 'react-router-dom';
import PokeItem from '../components/PokeItem';
import React from 'react';
import { selectAllItems } from '../redux/Slices/itemControlSlice';
import { useSelector } from 'react-redux';

function Cart() {
   const itemList = useSelector(selectAllItems);

   return (
      <div className="section">
         <h2 className="section-title">Your Cart</h2>
         <div className="cart-container">
            {itemList.length > 0 ? (
               itemList.map((item) => (
                  <PokeItem
                     item={item}
                     key={item.id}
                  />
               ))
            ) : (
               <Link to="/market">
                  <p className="add-item-message">
                     Please Click and Add Some Item from Store
                  </p>
               </Link>
            )}
         </div>
      </div>
   );
}

export default Cart;
