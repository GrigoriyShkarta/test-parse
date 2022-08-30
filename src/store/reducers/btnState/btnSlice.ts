import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    btnState: true
}

export const btnSlice = createSlice({
    name: 'btn',
    initialState,
    reducers: {
        toggleState(state) {
            state.btnState = !state.btnState
        }
    }
})

export default btnSlice.reducer