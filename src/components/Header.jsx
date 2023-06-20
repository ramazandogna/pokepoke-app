import '../assets/styles/header.css';

import {
   MdCatchingPokemon,
   MdDarkMode,
   MdLightMode,
   MdLocationSearching,
   MdShoppingCart,
} from 'react-icons/md';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/pokemon-icon.jpeg';
import { toggleDarkMode } from '../redux/Slices/darkModeSlice';

function Header() {
   const dispatch = useDispatch();
   const darkMode = useSelector((state) => state.darkMode);

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [darkMode]);

   const handleToggle = () => {
      dispatch(toggleDarkMode());
   };

   return (
      <header className="header container">
         <div className=" header-container container">
            <Link to="/">
               <div className="logo">
                  <img
                     src={Logo}
                     alt="logo"
                  />
                  <span className="logo">Pokepoke</span>
               </div>
            </Link>
            <div className="right">
               <ul className="list">
                  <Link to="/pokelist">
                     <li className="listItems">
                        <MdCatchingPokemon className="menuItemIcon" />
                        PokeList
                     </li>
                  </Link>
                  <Link to="/pokelist">
                     <li className="listItems">
                        <MdShoppingCart className="menuItemIcon" />
                        PokeMarket
                     </li>
                  </Link>
                  <Link to="/search">
                     <li className="listItems">
                        <MdLocationSearching className="menuItemIcon" />
                        Search
                     </li>
                  </Link>
               </ul>
               <span
                  onClick={handleToggle}
                  className="themeSwitcher"
               >
                  {darkMode ? (
                     <MdDarkMode className="icon" />
                  ) : (
                     <MdLightMode className="icon" />
                  )}
               </span>
            </div>
         </div>
      </header>
   );
}

export default Header;
