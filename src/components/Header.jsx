import '../assets/styles/header.css';

import {
   MdCatchingPokemon,
   MdClose,
   MdMenu,
   MdShoppingCart,
   MdStore,
} from 'react-icons/md';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/pokemon-icon.jpeg';
import { selectAllItems } from '../redux/Slices/itemControlSlice';
import { selectAllPokes } from '../redux/Slices/pokeControlSlice';
import { useSelector } from 'react-redux';

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [isSmallScreen, setIsSmallScreen] = useState(false);

   const itemList = useSelector(selectAllItems);
   const itemCount = itemList.length;

   const pokeList = useSelector(selectAllPokes);
   const pokeCount = pokeList.length;

   useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 760px)');
      setIsSmallScreen(mediaQuery.matches);

      const handleMediaQueryChange = (e) => {
         setIsSmallScreen(e.matches);
         setMenuOpen(false);
      };

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
         mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
   }, []);

   const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <header className={`header container ${menuOpen ? 'open' : ''}`}>
         <div className="logo">
            <Link
               className="logo-link"
               to="/"
            >
               <img
                  src={Logo}
                  alt="logo"
               />
               <div className="logo-text">Pokepoke</div>
            </Link>
         </div>

         <div className="right">
            {isSmallScreen && (
               <div
                  className="menu-icon"
                  onClick={handleMenuToggle}
               >
                  {menuOpen ? (
                     <MdClose className="hamburger-icon" />
                  ) : (
                     <MdMenu className="hamburger-icon" />
                  )}
               </div>
            )}
            {!isSmallScreen && (
               <ul className="list">
                  <Link to="/pokelist">
                     <li className="listItems">
                        <MdCatchingPokemon className="menuItemIcon" />
                        Poke List{pokeCount ? `: ${pokeCount}` : null}
                     </li>
                  </Link>
                  <Link to="/market">
                     <li className="listItems">
                        <MdStore className="menuItemIcon" />
                        Poke Store
                     </li>
                  </Link>
                  <Link to="/cart">
                     <li className="listItems">
                        <MdShoppingCart className="menuItemIcon" />
                        Cart{itemCount ? `: ${itemCount}` : null}
                     </li>
                  </Link>
               </ul>
            )}
         </div>

         {isSmallScreen && menuOpen && (
            <ul className="list">
               <Link to="/pokelist">
                  <li className="listItems">
                     <MdCatchingPokemon className="menuItemIcon" />
                     Poke List{pokeCount ? `: ${pokeCount}` : null}
                  </li>
               </Link>
               <Link to="/market">
                  <li className="listItems">
                     <MdStore className="menuItemIcon" />
                     Poke Store
                  </li>
               </Link>
               <Link to="/cart">
                  <li className="listItems">
                     <MdShoppingCart className="menuItemIcon" />
                     Cart{itemCount ? `: ${itemCount}` : null}
                  </li>
               </Link>
            </ul>
         )}
      </header>
   );
}

export default Header;
