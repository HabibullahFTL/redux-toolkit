const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./slices/cakeSlice')
const iceCreamReducer = require('./slices/iceCreamSlice')
const userReducer = require('./slices/userSlice')
const logger = require('redux-logger').createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store