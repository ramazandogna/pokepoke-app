import '../assets/styles/pokeItems.css';

import React, { useEffect, useState } from 'react';

import PokeItem from '../components/PokeItem';
import axios from 'axios';
import { motion } from 'framer-motion';

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

   const container = {
      visible: {
         transition: {
            delayChildren: 1,
            staggerChildren: 1,
         },
      },
   };

   const item = {
      hidden: {
         opacity: 0,
         translateX: -80,
      },

      visible: {
         opacity: 1,
         translateX: 0,
      },
   };

   return (
      <motion.div
         initial={{ opacity: 0, translateY: 30 }}
         animate={{ opacity: 1, translateY: 0 }}
         transition={{ delay: 0.05 }}
         className="section"
      >
         <h2 className="section-title">Poke Store:</h2>
         <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="item-list"
         >
            {items.map((tool) => (
               <motion.div
                  variants={item}
                  key={item.id}
               >
                  <PokeItem item={tool} />
               </motion.div>
            ))}
         </motion.div>
      </motion.div>
   );
}

export default PokeMarket;
