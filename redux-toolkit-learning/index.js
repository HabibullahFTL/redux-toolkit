const store = require('./app/store')
const cakeActions = require('./app/slices/cakeSlice').cakeActions
const iceCreamActions = require('./app/slices/iceCreamSlice').iceCreamActions
const fetchUsers = require('./app/slices/userSlice').fetchUsers

console.log("Initial state: ", store.getState())



const unsubscribe = store.subscribe(() => {
    console.log("Updated state:", store.getState());
})
store.dispatch(fetchUsers())

// store.dispatch(cakeActions.orderCake());
// store.dispatch(cakeActions.restockCake(4));


// store.dispatch(iceCreamActions.orderIceCream())
// store.dispatch(iceCreamActions.restockIceCream(3))

// unsubscribe()

