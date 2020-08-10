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
      let item = action.item;
      item.quantity = 1;
      return {
        ...state,
        status: "idle",
        cart: [...state.cart, item],
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
