import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import React from 'react';

const Footer = () => {
   return (
      <div
         className="footerWrapper"
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3.5rem 2rem',
         }}
      >
         <span
            style={{
               marginRight: '1rem',
               fontWeight: 'bold',
               color: '#dcdcdc',
            }}
            className="created"
         >
            Created by Ramazan Doğan
         </span>
         <a
            href="https://github.com/ramazandogna"
            target="_blank"
            rel="noopener noreferrer"
         >
            <AiFillGithub
               size={30}
               style={{ marginRight: '1rem' }}
               className="github"
            />
         </a>
         <a
            href="https://www.linkedin.com/in/ramazandogna/"
            target="_blank"
            rel="noopener noreferrer"
         >
            <AiFillLinkedin
               className="linkedin"
               size={30}
            />
         </a>
      </div>
   );
};

export default Footer;
