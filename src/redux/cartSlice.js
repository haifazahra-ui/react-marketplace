import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({

    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, payload ) => {

            const findProduct = state.find((product) => product.id === payload?.payload.id)

            if(state.length === 0 || !findProduct){
                let newProduct = { ...payload.payload, qty: 1 };
                state.push(newProduct)
                return
            }

            if (findProduct) {
                state.map(product => {
                    if(product.id === payload.payload.id){
                        product.qty += 1
                    }
                })
            }
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer