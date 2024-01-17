import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: false,
    open: false,
    data: false
}

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        openModal: (state, action) => {
            state.name = action.payload.name
            state.open = true
            state.data = action.payload?.data || false
        },
        closeModal: state => {
            state.name = false
            state.open = false
            state.data = false

        }
    }
})

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;