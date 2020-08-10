const initialState = {
  status: "idle",
  products: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_PRODUCTS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_PRODUCTS": {
      return {
        ...state,
        status: "idle",
        products: action.products,
      };
    }
    case "RECEIVE_PRODUCTS_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    default: {
      return state;
    }
  }
}
