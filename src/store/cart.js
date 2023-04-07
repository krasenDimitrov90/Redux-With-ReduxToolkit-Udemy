import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

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

export const sendCartData = (cartItems) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    fetch('https://testing-12da0-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cartItems),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Sending cart data failed.');
        }
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      })
      .catch(err => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      });
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;