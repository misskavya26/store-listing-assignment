import { combineReducers } from "redux";
import cartReducer from "./Reducer/CartReducer";

const allReducer = combineReducers({
    cart: cartReducer
})

export default allReducer;