import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.totalPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.totalPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQty = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
