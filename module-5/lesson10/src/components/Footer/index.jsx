import React from 'react';
import "./index.scss";

const index = () => {
   return (
      <footer className='bg-success text-center p-3 text-white'>
        <div className="container">
         <h5>{new Date().getFullYear()}</h5>
         </div> 
      </footer>
   );
};

export default index;