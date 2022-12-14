import React,{useEffect} from 'react';
import "./style.scss";

const index = () => {

   useEffect(()=>{
      console.log("render Home components");
   },[])




   return (
      <div className='home'>
         <h1>Home</h1>
      </div>
   );
};

export default index;<h1>Home</h1>