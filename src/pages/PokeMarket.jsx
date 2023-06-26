import '../assets/styles/pokeItems.css';

import React, { useEffect, useState } from 'react';

import PokeItem from '../components/PokeItem';
import axios from 'axios';

function PokeMarket() {
   const [items, setItems] = useState([]);
   const [offset, setOffset] = useState(0);

   useEffect(() => {
      fetchItems();
   }, []);

   const fetchItems = async () => {
      try {
         const response = await axios.get(
            `https://pokeapi.co/api/v2/item/?limit=200&offset=${offset}`
         );
         const itemResults = response.data.results;

         const itemPromises = itemResults.map(async (itemResult) => {
            const itemResponse = await axios.get(itemResult.url);
            return itemResponse.data;
         });

         const itemData = await Promise.all(itemPromises);
         setItems((prevItems) => [...prevItems, ...itemData]);
      } catch (error) {
         console.error('Failed to fetch item data', error);
      }
   };

   const handleLoadMore = () => {
      setOffset((prevOffset) => prevOffset + 50);
   };

   return (
      <div className="section">
         <h2 className="section-title">Poke Store:</h2>
         <div className="item-list">
            {items.map((item) => (
               <PokeItem
                  key={item.id}
                  item={item}
               /> // PokeItem bileşenini kullan
            ))}
         </div>
         <button
            className="load-more-button"
            onClick={handleLoadMore}
         >
            Load More
         </button>
      </div>
   );
}

export default PokeMarket;
