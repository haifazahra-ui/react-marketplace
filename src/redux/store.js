import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice"; 
import { userReducer } from "./userSlice";   

const rootReducer = combineReducers({
        product: productReducer,
        cart: cartReducer,
        user: userReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })

});
