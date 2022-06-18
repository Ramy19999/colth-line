import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directroy.reducer";
import shopReducer from "./shop/shop.reducer";
export default combineReducers ({

    user : UserReducer,
    cart : CartReducer,
    directory: directoryReducer ,
    shop : shopReducer

});