import '../assets/styles/pokeItems.css';

import React, { useEffect, useState } from 'react';

import PokeItem from '../components/PokeItem';
import axios from 'axios';

function PokeMarket() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      fetchItems();
   }, []);

   const fetchItems = async () => {
      try {
         const response = await axios.get(
            'https://pokeapi.co/api/v2/item/?limit=200'
         );
         const itemResults = response.data.results;

         const itemPromises = itemResults.map(async (itemResult) => {
            const itemResponse = await axios.get(itemResult.url);
            return itemResponse.data;
         });

         const itemData = await Promise.all(itemPromises);
         setItems(itemData);
      } catch (error) {
         console.error('Failed to fetch item data', error);
      }
   };

   return (
      <div className="section">
         <h2 className="section-title">Poke Store:</h2>
         <div className="item-list">
            {items.map((item) => (
               <PokeItem
                  key={item.id}
                  item={item}
               />
            ))}
         </div>
      </div>
   );
}

export default PokeMarket;
