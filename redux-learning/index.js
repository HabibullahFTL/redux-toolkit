const redux = require('redux')
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORED = "CAKE_RESTORED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED"
const ICE_CREAM_RESTORED = "ICE_CREAM_RESTORED"

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

const restoreCakes = (qty = 1) => {
    return {
        type: CAKE_RESTORED,
        payload: qty
    }
}

const orderIceCream = () => {
    return {
        type: ICE_CREAM_ORDERED,
        payload: 1
    }
}

const restoreIceCream = () => {
    return {
        type: ICE_CREAM_RESTORED,
        payload: 1
    }
}

const initialCakeValues = {
    numberOfCake: 10
}
const initialIceCreamsValues = {
    numberOfIceCreams: 10
}

// (previousState, action)=> newState

const cakeReducer = (state = initialCakeValues, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1,
            }

        case CAKE_RESTORED:
            return {
                ...state,
                numberOfCake: state.numberOfCake + action.payload || 1
            }

        default:
            return state;
    }
}
const iceCreamReducer = (state = initialIceCreamsValues, action) => {
    switch (action.type) {
        case ICE_CREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1,
            }

        case ICE_CREAM_RESTORED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload || 1
            }

        case CAKE_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }

        default:
            return state;
    }
}

const rootReducer = redux.combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer
})

const store = redux.createStore(rootReducer, redux.applyMiddleware(logger))

console.log("Initial state", store.getState());



const actions = redux.bindActionCreators({ orderCake, restoreCakes, orderIceCream, restoreIceCream }, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.restoreCakes(4)
actions.orderIceCream()
actions.orderIceCream()


