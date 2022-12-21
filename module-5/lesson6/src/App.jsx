import React, { useState } from "react";
import Home from "./pages/Home";
import { context } from "./context";
const App = () => {
  const [data, setData] = useState({ message: "UseContext" });
  const [arr, setArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);

  const add=(text)=>{
    console.log(text);
  }

  return (
    <>
      <context.Provider value={{ data, arr , add}}>
        <Home />
      </context.Provider>
    </>
  );
};

export default App;
