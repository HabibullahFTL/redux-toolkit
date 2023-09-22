const axios = require('axios');
const redux = require('redux');
const thunk = require('redux-thunk').default
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const USERS_REQUESTED = 'USERS_REQUESTED'
const USERS_REQUEST_SUCCESS = 'USERS_REQUEST_SUCCESS'
const USERS_REQUEST_FAILED = 'USERS_REQUEST_FAILED'

const requestForFetchUsers = () => {
    return {
        type: USERS_REQUESTED,
    }
}
const successfullyFetchedUsers = (users) => {
    return {
        type: USERS_REQUEST_SUCCESS,
        payload: users
    }
}
const failedFetchingUsers = (error) => {
    return {
        type: USERS_REQUEST_FAILED,
        payload
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }

        case USERS_REQUEST_SUCCESS:
            return {
                loading: false,
                users: action?.payload,
                error: ''
            }

        case USERS_REQUEST_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state
    }
}


const fetchUsers = () => {
    return (dispatch) => {
        dispatch(requestForFetchUsers());
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            dispatch(successfullyFetchedUsers(response?.data?.map(user => user?.id)))
        }).catch(error => {
            dispatch(failedFetchingUsers(error?.message))
        })
    }
}


const store = redux.createStore(reducer, redux.applyMiddleware(thunk, logger));



store.dispatch(fetchUsers())