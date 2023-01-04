import React,{useState} from 'react';

const index = () => {
   const [num, setNum] = useState(0);
   console.log('card render')
   return (
      <div className='card p-5 shadow w-25 mx-auto'>
         <h6>Card</h6>
         <h5>{num}</h5>
         <button className="btn btn-danger" onClick={() => setNum(num + 1)}>
        Add
      </button>
      </div>
   );
};

export default React.memo(index);