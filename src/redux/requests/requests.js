import axios from 'axios';

export function getGuests(){
    return axios.get()
                .then(response => response.data)
                .catch(error => {
                    console.log('Error handling GET in getGuests request: ', error);
                    throw error.response || error;
                });
}

export function getCompanies(){
    return axios.get()
                .then(response => response.data)
                .catch(error => {
                    console.log('Error handling GET in getCompanies request: ', error);
                    throw error.response || error;
                });
}

export function getTemplates(){
    return axios.get()
                .then(response => response.data)
                .catch(error => {
                    console.log('Error handling GET in getTemplates request: ', error);
                    throw error.response || error;
                });
}

export function getMessage(){
    return axios.get()
                .then(response => response.data)
                .catch(error => {
                    console.log('Error handling GET in getMessage request: ', error);
                    throw error.response || error;
                });
}

export function postMessage(payload){
    return axios.post()
                .then(response => response)
                .catch(error => {
                    console.log('Error handling POST in postMessage request: ', error);
                    throw error.response || error;
                });
}

export function postTemplate(payload){
    return axios.post()
                .then(response => response)
                .catch(error => {
                    console.log('Error handling POST in postTemplate request: ', error);
                    throw error.response || error;
                });
}