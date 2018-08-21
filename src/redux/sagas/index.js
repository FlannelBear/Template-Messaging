import { put, takeLatest } from 'redux-saga/effects';

import { getGuests, 
         getCompanies, 
         getTemplates, 
         getMessage, 
         postMessage, 
         postTemplate } from '../requests/requests.js';

function* guests(){
    try{
        const guests = yield getGuests();
        yield put({type: 'STORE_GUESTS', payload: guests});
    }catch(error){
        console.log("Error in guests saga: ", error);
    }
}

function* companies(){
    try{
        const companies = yield getCompanies();
        yield put({type: 'STORE_COMPANIES', payload: companies});
    }catch(error){
        console.log("Error in companies saga: ", error);
    }
}

function* message(){
    try{
        const message = yield getMessage();
        yield console.log(message);
        yield put({type: 'STORE_MESSAGE', payload: message});
    }catch(error){
        console.log("Error in message saga: ", error);
    }
}

function* templates(){
    try{
        const templates = yield getTemplates();
        yield put({type: 'STORE_TEMPLATES', payload: templates});
    }catch(error){
        console.log("Error in templates saga: ", error);
    }
}

function* templateChoices(action){
    try{
        yield postMessage(action.payload);
        yield put({type: 'FETCH_MESSAGE'});
    }catch(error){
        console.log("Error in templateChoices saga: ", error);
    }
}

function* newTemplate(action){
    try{
        yield postTemplate(action.payload);
        yield put({type: 'FETCH'});
    }catch(error){
        console.log("Error in newTemplate saga: ", error);
    }
}

export default function* rootSaga(){
    yield takeLatest('FETCH', guests);
    yield takeLatest('FETCH', companies);
    yield takeLatest('FETCH', templates);
    yield takeLatest('FETCH_MESSAGE', message);
    yield takeLatest('POST_TEMPLATE_CHOICES', templateChoices);
    yield takeLatest('POST_NEW_TEMPLATE', newTemplate);
}