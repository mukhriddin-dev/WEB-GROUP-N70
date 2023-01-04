const initialState = {
  product: [],
  title: "",
  price: "",
  num: 0,
  posts: [],
  load: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        num: state.num + 1,
      };
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "SET_PRODUCT":
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        price: "",
      };
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload
      };
    case "SET_LOADER":
      return {
        ...state,
        load: action.payload,
      };
    default:
      return state;
  }
};
