import { createSlice } from "@reduxjs/toolkit";
// item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
const initialState = {
    cartIsOpen: false,
    items: [
        {
            title: 'Test item',
            quantity: 3,
            price: 6,
        }
    ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.cartIsOpen = !state.cartIsOpen;
        },
        addItem(state, action) {
            let item = state.items.find(i => i.title === action.payload.title);
            if (item) {
                item.quantity++;
                state.items.filter(i => i.title !== action.payload.title).push(item);
            } else if (!item) {
                item = {
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price,
                };
                state.items.push(item);
            }
        },
        decrementQty(state, action) {
            let item = state.items.find(i => i.title === action.payload.title);
            if (item.quantity === 1) {
                state.items = state.items.filter(i => i.title !== action.payload.title);
            } else {
                item.quantity--;
                state.items.filter(i => i.title !== action.payload.title).push(item);
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;