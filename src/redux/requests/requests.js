import axios from 'axios';

export function getGuests(){
    return axios.get('/api/guests')
                .then(response => response.data)
                .catch(error => {
                    console.log('Error handling GET in getGuests request: ', error);
                    throw error.response || error;
                });
}

export function getCompanies(){
    return axios.get('/api/companies')
                .then(response => response.data)
                .catch(error => {
                    console.log('Error handling GET in getCompanies request: ', error);
                    throw error.response || error;
                });
}

export function getTemplates(){
    return axios.get('/api/templates')
                .then(response => {
                    console.log("Response from getTemplates: ", response.data);
                    return response.data})
                .catch(error => {
                    console.log('Error handling GET in getTemplates request: ', error);
                    throw error.response || error;
                });
}

export function getMessage(){
    return axios.get('/api/message')
                .then(response => {
                    console.log(response.data);
                    return response.data
                })
                .catch(error => {
                    console.log('Error handling GET in getMessage request: ', error);
                    throw error.response || error;
                });
}

export function postMessage(payload){
    return axios.post('/api/messageData', payload)
                .then(response => response)
                .catch(error => {
                    console.log('Error handling POST in postMessage request: ', error);
                    throw error.response || error;
                });
}

export function postTemplate(payload){
    console.log("postTemplate: ", payload);
    return axios.post('/api/newTemplate', payload)
                .then(response => {
                    console.log(response.data);
                    return response})
                .catch(error => {
                    console.log('Error handling POST in postTemplate request: ', error);
                    throw error.response || error;
                });
}