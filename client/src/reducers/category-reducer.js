const initialState = {
  status: "idle",
  category: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_CATEGORY": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_CATEGORY": {
      return {
        ...state,
        category: action.category,
      };
    }

    case "RECEIVE_CATEGORY_ERROR": {
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
