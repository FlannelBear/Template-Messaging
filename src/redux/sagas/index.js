import { put, takeLatest } from 'redux-saga/effects';

import { getGuests, 
         getCompanies, 
         getTemplates, 
         getMessage, 
         postMessage, 
         postTemplate } from '../requests/requests.js';
import rootSaga from '../../../../../../kipsu-exercise/template-message/src/redux/sagas/index.js';

function* guests(){
    try{

    }catch(error){
        console.log("Error in guests saga: ", error);
    }
}

function* companies(){
    try{

    }catch(error){
        console.log("Error in companies saga: ", error);
    }
}

function* message(){
    try{

    }catch(error){
        console.log("Error in message saga: ", error);
    }
}

function* templates(){
    try{

    }catch(error){
        console.log("Error in templates saga: ", error);
    }
}

function* templateChoices(){
    try{

    }catch(error){
        console.log("Error in templateChoices saga: ", error);
    }
}

function* newTemplate(){
    try{

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