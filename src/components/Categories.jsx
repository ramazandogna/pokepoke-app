import '../assets/styles/categories.css';

import { useDispatch, useSelector } from 'react-redux';

import CategoryBox from './CategoryBox';
import React from 'react';
import { motion } from 'framer-motion';
import { setSelectedCategory } from '../redux/Slices/categorySlice';

function Categories() {
   const dispatch = useDispatch();
   const pokemonData = useSelector((state) => state.pokes.pokemonData);

   const handleCategoryClick = (category) => {
      dispatch(setSelectedCategory(category === 'All' ? null : category));
   };

   const getUniqueTypes = () => {
      const uniqueTypes = [];
      pokemonData.forEach((pokemon) => {
         const type = pokemon.types[0].type.name;
         if (!uniqueTypes.includes(type)) {
            uniqueTypes.push(type);
         }
      });
      return uniqueTypes;
   };

   const uniqueTypes = getUniqueTypes();

   const container = {
      visible: {
         transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
         },
      },
   };

   const item = {
      hidden: {
         opacity: 0,
         translateY: -30,
      },

      visible: {
         opacity: 1,
         translateY: 0,
      },
   };

   return (
      <motion.div
         variants={container}
         initial="hidden"
         animate="visible"
         className="category-boxes"
      >
         <div
            onClick={() => handleCategoryClick('All')}
            className="category-box"
         >
            All
         </div>
         {uniqueTypes.map((type) => (
            <motion.div variants={item}>
               <CategoryBox
                  key={type}
                  pokemon={{ types: [{ type: { name: type } }] }}
                  onClick={handleCategoryClick}
               />
            </motion.div>
         ))}
      </motion.div>
   );
}

export default React.memo(Categories);
