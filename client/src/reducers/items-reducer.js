const initialState = {
  status: "idle",
  items: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ITEMS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ITEMS": {
      return {
        ...state,
        status: "idle",
        items: action.items,
      };
    }
    case "RESET_ITEM": {
      return initialState;
    }
    case "RECEIVE_ITEMS_ERROR": {
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
