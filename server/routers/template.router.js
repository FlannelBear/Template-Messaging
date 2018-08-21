const router = require('express').Router();
const Template = require('../modules/template.class');

const guests = require('../Guests.json');
const companies = require('../Companies.json');
// Storing created templates, I have provided some default ones to get started with.
const templates = [
    {template: 'greeting firstName lastName and welcome to city! Thank you for choosing to stay with company.  Your room roomNumber will be available today at startTimestamp.  Have a great day!'},
    {template: 'greeting firstName.  We just wanted to inform you that your checkout time is set for endTimestamp.  Thank you for choosing to stay with company, we hope to see you again the next time you visit city!'}
];

/*
    Expected data structure:
        {
            guest: {CHOOSEN GUEST OBJECT},
            company: {CHOOSEN COMPANY OBJECT},
            template: {CHOOSEN TEMPLATE OBJECT}
        }
*/
let messageData = {};

console.log('router loaded');
console.log(guests);
console.log(companies);
console.log(templates);

router.post('/newTemplate', (req, res)=>{
    try{
        console.log("In new template: ", req.body);
        templates.push(req.body);
        res.sendStatus(200);
    } catch(error){
        console.log('Error handling POST for /api/newTemplate: ', error);
        res.sendStatus(404);
    }
});

router.get('/guests', (req, res)=>{
    try{
        console.log('Getting guests');
        res.send(guests);
    } catch (error) {
        console.log('Error handling GET for /api/guests: ', error);
        res.sendStatus(404);
    }
});

router.get('/companies', (req, res)=> {
    try{
        console.log('Getting companies');
        res.send(companies);
    } catch (error) {
        console.log('Error handling GET for /api/companies: ', error);
        res.sendStatus(404);
    }
});

router.get('/templates', (req, res)=> {
    try{
        console.log('Getting templates: ', templates);
        res.send(templates);
    } catch (error) {
        console.log('Error handling GET for /api/template: ', error);
        res.sendStatus(404);
    }
});

router.get('/message', async (req, res) => {
    try{
        console.log('Getting message');
        let template = new Template(messageData.template.template);
        let responseObject = {message: await template.generateMessage(messageData.guest, messageData.company)};
        console.log(responseObject);
        res.send(responseObject);
    } catch (error) {
        console.log('Error handling GET for /api/message: ', error);
        res.sendStatus(404);
    }
});

router.post('/messageData', (req, res)=> {
    try{
        console.log('Posting message data');
        // Check request data structure
        if(req.body.guest && req.body.company && req.body.template){
            if(typeof req.body.guest === 'object' && typeof req.body.company === 'object' && typeof req.body.template === 'object'){
                messageData = req.body;
                console.log("new messageData: ", messageData);
                res.sendStatus(200);
            } else {
                console.log("Improper data types for guest, or company, or template");
                res.sendStatus(403);
            }
        } else {
            console.log("Improper data structure of request");
            res.sendStatus(403);
        }
    } catch (error) {
        console.log('Error handling POST for /api/messageData: ', error);
        res.sendStatus(404);
    }
})

module.exports = router;