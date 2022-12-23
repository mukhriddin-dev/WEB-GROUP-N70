import React from 'react';
import "./style.scss";

const index = ({btn, content, type, children}) => {
   return (
      <button type={type} className={btn}>
       {children}
      </button>
   );
};

export default index;