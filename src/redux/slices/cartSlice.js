import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [], //store more than one value
  //action
  reducers: {
    //function to item to the state
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      //filter - returns a new array satisfying the condition
      return state.filter((item) => item.id != action.payload);
    },
    emptyCart: (state) => {
      return (state = []);
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
