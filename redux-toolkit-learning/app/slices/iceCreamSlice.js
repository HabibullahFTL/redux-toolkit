const { cakeActions } = require('./cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfIceCream: 5
}

const iceCreamSlice = createSlice({
    name: 'ice-cream',
    initialState,
    reducers: {
        orderIceCream: (state) => {
            state.numberOfIceCream--;
        },
        restockIceCream: (state, action) => {
            state.numberOfIceCream += action.payload;
        }
    },
    // extraReducers: {
    //     ['cake/orderCake']: (state) => {
    //         state.numberOfIceCream--;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.orderCake, (state) => {
            state.numberOfIceCream--;
        })
    }
})


module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;