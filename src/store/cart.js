import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            let item = state.items.find(i => i.title === action.payload.title);
            state.totalQuantity++;
            if (item) {
                item.quantity++;
                state.items.filter(i => i.title !== action.payload.title).push(item);
            } else if (!item) {
                item = {
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price,
                    id: action.payload.id,
                };
                state.items.push(item);
            }
        },
        removeItem(state, action) {
            let item = state.items.find(i => i.title === action.payload.title);
            state.totalQuantity--;
            if (item.quantity === 1) {
                state.items = state.items.filter(i => i.title !== action.payload.title);
            } else {
                item.quantity--;
                // state.items.filter(i => i.title !== action.payload.title).push(item);
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;