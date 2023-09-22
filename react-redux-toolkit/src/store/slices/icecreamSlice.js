import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfIceCream: 10
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--;
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase('cake/ordered', (state) => {
            state.numOfIceCream--;
        })
    }
})

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions