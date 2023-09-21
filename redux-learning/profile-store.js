const redux = require('redux');
const immer = require('immer')

const initialValues = {
    name: "Habibullah",
    address: {
        street: "44/A, ABC Road",
        city: "Narayanganj",
        zip: "1421"
    }
}


const UPDATE_STREET = "UPDATE_STREET";
const updateStreet = (street) => {
    return {
        type: UPDATE_STREET,
        payload: street
    }
}

const reducer = (state = initialValues, action) => {
    switch (action.type) {
        case UPDATE_STREET:
            return immer.produce(state, (draft) => {
                draft.address.street = action.payload
            })

        default:
            return state;
    }
}


const store = redux.createStore(reducer);

const actions = redux.bindActionCreators({ updateStreet }, store.dispatch);

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated state: ", store.getState());
})

actions.updateStreet("Hazi bari");

unsubscribe();