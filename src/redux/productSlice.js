import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/boneka.jpg";
import product2 from "../assets/chargepooh.jpg";
import product3 from "../assets/lampupooh.jpg";

export const productSlice = createSlice({

    name: "product",
    initialState: [
        {
            id: 1,
            product_name: "boneka pooh",
            description: "lorem ipsum",
            qty: 10,
            price: 100000,
            product_type: "boneka",
            product_image: product1
        },
        {
            id: 2,
            product_name: "charger pooh",
            description: "lorem ipsum",
            qty: 10,
            price: 156000,
            product_type: "elektronik",
            product_image: product2
        },
        {
            id: 3,
            product_name: "lampu pooh",
            description: "lorem ipsum",
            qty: 6,
            price: 54000,
            product_type: "elektronik",
            product_image: product3
        }
    ],
    reducers: {
        addProduct: (state, payload ) => {
            const findProduct = state.find(p => p.id === payload.payload.id)
            if(findProduct.qty === 1){
                alert("product out of stock")
                return
            }
            state?.map(s => {
                if(s.id === findProduct.id){
                    s.qty -= 1
                }
            })
        }
    }

})

export const { addProduct } = productSlice.actions
export default productSlice.reducer