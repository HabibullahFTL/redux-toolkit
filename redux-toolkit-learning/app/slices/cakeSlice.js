const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numberOfCake: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        orderCake: (state) => {
            state.numberOfCake--;
        },
        restockCake: (state, action) => {
            state.numberOfCake = state.numberOfCake + action.payload
        }
    },
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions