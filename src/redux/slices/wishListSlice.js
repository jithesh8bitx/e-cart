import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: [], //store more than one value
  //action
  reducers: {
    //function to item to the state
    addToWishList: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      //filter - returns a new array satisfying the condition
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
