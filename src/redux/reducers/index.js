import { combineReducers } from 'redux';

const guests = (state = [], action) => {
    switch(action.type){
        case 'STORE_GUESTS':
            return action.payload;
        default:
            return state;
    }
}

const companies = (state = [], action) => {
    switch(action.type){
        case 'STORE_COMPANIES':
            return action.payload;
        default:
            return state;
    }
}

const templates = (state = [], action) => {
    console.log(action);
    switch(action.type){
        case 'STORE_TEMPLATES':
            return action.payload;
        default:
            return state;
    }
}

const message = (state = '', action) => {
    switch(action.payload){
        case 'STORE_MESSAGE':
            return action.payload.message;
        default: 
            return state;
    }
}

const store = combineReducers({
    guests,
    companies,
    templates,
    message
});

export default store;