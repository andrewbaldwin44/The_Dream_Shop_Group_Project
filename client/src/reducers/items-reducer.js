const initialState = {
  status: "idle",
  products: null,
  categories: null,
  brands: null,
  bodyLocation: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_ITEM_INFORMATION": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_PRODUCTS": {
      return {
        ...state,
        products: action.products,
      };
    }

    case "RECEIVE_CATEGORIES": {
      return {
        ...state,
        categories: action.categories,
      };
    }

    case "RECEIVE_BRANDS": {
      return {
        ...state,
        brands: action.brands,
      };
    }

    case "RECEIVE_BODY_LOCATION": {
      return {
        ...state,
        bodyLocation: action.bodyLocation,
      };
    }

    case "RECEIVE_ALL_ITEM_INFORMATION_ERROR": {
      return {
        ...state,
        status: "error"
      }
    }

    case "RECEIVE_ALL_ITEM_INFORMATION": {
      return {
        ...state,
        status: 'idle',
      }
    }

    default: {
      return state;
    }
  }
}
