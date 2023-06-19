import '../assets/styles/banner.css';

import React from 'react';
import banner from '../assets/img/pokepokewp.jpg';

function Banner() {
   return (
      <div className="banner">
         <img
            src={banner}
            alt="banner"
         />
      </div>
   );
}

export default Banner;
