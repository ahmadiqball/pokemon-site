import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import pokebagSlice from './pokebag-slice';

const store = configureStore({
    reducer: { ui: uiSlice, bag: pokebagSlice }
})

export default store;