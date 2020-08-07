const initialState = {
  status: "idle",
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "CART_ITEM_ADDED": {
      return {
        ...state,
        status: "idle",
        cart: state.cart.push[action.item],
      };
    }
    case "CART_ADD_ITEM_ERROR": {
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
