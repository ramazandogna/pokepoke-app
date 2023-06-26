import '../assets/styles/pokeItems.css';

import {
   addItemToCart,
   removeFromCart,
   selectAllItems,
} from '../redux/Slices/itemControlSlice';
import { useDispatch, useSelector } from 'react-redux';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import React from 'react';

function PokeItem({ item }) {
   const { name, flavor_text_entries, sprites } = item;
   const flavorText = flavor_text_entries[0].text;
   const itemImage = sprites.default;

   const dispatch = useDispatch();

   const itemList = useSelector(selectAllItems);

   let storedItems = itemList.find((i) => i.id === item.id);

   return (
      <div className="item-card">
         <div className="image-container">
            <img
               src={itemImage}
               alt={name}
               className="item-image"
            />
         </div>
         <div className="detail-container">
            <div className="item-name">{name}</div>
            <div className="item-description">{flavorText}</div>
            {storedItems ? (
               <div
                  onClick={() => dispatch(removeFromCart(item))}
                  className="remove-item"
               >
                  <div className="add-item-text">REMOVE</div>
                  <div className="remove-item-icon-div">
                     <BsFillArrowRightCircleFill />
                  </div>
               </div>
            ) : (
               <div
                  onClick={() => dispatch(addItemToCart(item))}
                  className="add-item"
               >
                  <div className="add-item-text">ADD</div>
                  <div className="add-item-icon-div">
                     <BsFillArrowRightCircleFill />
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default PokeItem;
