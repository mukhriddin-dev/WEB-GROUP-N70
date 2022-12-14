import React from 'react';
import "./style.scss";
const index = () => {
   return (
      <footer className="bg-dark text-info p-5 text-center">
      <div className="container">
         <p>powerd by N70 group {new Date().getFullYear()}</p>
      </div>
      </footer>
   );
};

export default index;