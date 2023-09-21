const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../app/slices/cakeSlice')
const iceCreamReducer = require('../app/slices/iceCreamSlice')
const userReducer = require('../app/slices/userSlice')
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