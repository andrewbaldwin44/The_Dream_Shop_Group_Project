import { combineReducers } from "redux";

import cart from "./cart-reducer";
import items from "./items-reducer";

export default combineReducers({ cart, items });
