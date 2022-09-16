import { createSlice } from "@reduxjs/toolkit";

const pokebagSlice = createSlice({
  name: "bag",
  initialState: {
    bagItem: [],
  },
  reducers: {
    addToBag(state, action) {
      const itemId = state.bagItem.findIndex(
        (item) => item.id === action.payload.item.id
      );
      
      if (itemId === -1) {
        state.bagItem = state.bagItem.concat(action.payload.item);
      }
      
      sessionStorage.setItem('bagData', JSON.stringify(state.bagItem))
    },
    removeFromBag(state, action) {
      state.bagItem = state.bagItem.filter(
        (item) => item.id !== action.payload
      );

      sessionStorage.setItem('bagData', JSON.stringify(state.bagItem))
    },
    initiateBag(state, action) {
      state.bagItem = action.payload;
    },
  },
});

export const pokebagActions = pokebagSlice.actions;

export default pokebagSlice.reducer;
