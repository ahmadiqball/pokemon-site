import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showModal: false,
        modalData: [],
    },
    reducers: {
        showModal(state, action) {
            state.showModal = true;
            state.modalData = action.payload;
        },
        hideModal(state) {
            state.showModal= false
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;