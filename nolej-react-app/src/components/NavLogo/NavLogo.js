import React from 'react';
import '../NavLogo/NavLogo.css'
import logo from '../NavLogo/logo.jpg'

function Label() {
   return (
      <div className='label-container'>
         <div className='left-content'>
            <label>Name</label>
         </div>
         <div className='right-content'>
            <img src={logo} alt="Logo" />
         </div>
      </div>
   );
}

export default Label;
