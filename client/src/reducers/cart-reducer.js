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
      let newCart = [...state.cart];
      let item = action.item;
      let quantity = 1;
      if (action.quantity !== undefined) {
        quantity = action.quantity;
      }
      item.quantity = quantity;
      if (newCart.findIndex((obj) => obj.id === item.id) === -1) {
        newCart.push(item);
      } else {
        newCart[newCart.findIndex((obj) => obj.id === item.id)].quantity =
          newCart[newCart.findIndex((obj) => obj.id === item.id)].quantity +
          quantity;
      }
      return {
        ...state,
        status: "idle",
        cart: newCart,
      };
    }
    case "CART_ADD_ITEM_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    case "CART_RESET": {
      return initialState;
    }

    case "CART_CHANGE_QUANTITY": {
      let newCart = [...state.cart];
      newCart[action.index].quantity =
        newCart[action.index].quantity + action.quantity;
      let newCart2 = newCart.filter((item) => {
        return item.quantity > 0;
      });

      return {
        ...state,
        status: "idle",
        cart: newCart2,
      };
    }

    default: {
      return state;
    }
  }
}
