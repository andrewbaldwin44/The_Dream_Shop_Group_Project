const initialState = {
  status: "idle",
  order: null,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ORDER": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "ADDED_ORDER": {
      return {
        ...state,
        status: "idle",
        order: action.order,
      };
    }

    default: {
      return state;
    }
  }
}
