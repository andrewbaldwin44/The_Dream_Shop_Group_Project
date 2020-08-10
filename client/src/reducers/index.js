import { combineReducers } from "redux";

import cart from "./cart-reducer";
import items from "./items-reducer";
import category from "./category-reducer";

export default combineReducers({ cart, items, category });
