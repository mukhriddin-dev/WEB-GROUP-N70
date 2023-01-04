export const ADD = () => {
  return {
    type: "ADD",
  };
};

export const SET_TITLE = (data) => {
  return {
    type: "SET_TITLE",
    payload: data,
  };
};

export const SET_PRICE = (data) => {
  return {
    type: "SET_PRICE",
    payload: data,
  };
};


export const SET_PRODUCT = (data) => {
  if (data.title.trim().length === 0 || data.price.trim().length === 0) {
    alert("Please fill the input field");
  } else {
    return {
      type: "SET_PRODUCT",
      payload: data,
    };
  }
};


export const CLEAR_INPUT=()=>{
   return { type:"CLEAR_INPUT"}
}


export const GET_POSTS=(posts)=>{
  return { type:"GET_POSTS", payload: posts}
}

export const SET_LOADER=(load)=>{
return { type:"SET_LOADER", payload:load}
}