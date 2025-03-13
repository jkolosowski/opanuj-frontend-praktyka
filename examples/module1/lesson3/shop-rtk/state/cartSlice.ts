import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { CartItem } from '../types/CartItem';
import type { Product } from '../types/Product';
import { remove } from 'es-toolkit';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product | CartItem>) => {
      const cartItem = state.items.find((item) => {
        return item.id === action.payload.id;
      });

      if (cartItem) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: cartItem.amount + 1 }
            : item
        );
      } else {
        const newItem = { ...action.payload, amount: 1 };
        state.items.push(newItem);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = remove(state.items, (item) => item.id === action.payload);
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find((item) => item.id === action.payload);

      if (!cartItem) {
        return;
      }

      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, amount: cartItem.amount + 1 }
          : item
      );
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find((item) => item.id === action.payload);

      if (!cartItem) {
        return;
      }

      if (cartItem.amount <= 1) {
        state.items = remove(state.items, (item) => item.id === action.payload);
        return;
      }

      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, amount: cartItem.amount - 1 }
          : item
      );
    },
  },
});

export const { addToCart, clearCart, removeFromCart, decreaseAmount } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectItemAmount = (state: RootState) =>
  state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

export default cartSlice.reducer;
