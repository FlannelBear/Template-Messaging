// Express require and app creation
const app = require('express')();

// Body Parser Require
const bodyParser = require('body-parser');

// Dependency Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Port
const PORT = process.env.PORT || 5000;

// Router Requires and Uses
const templateRouter = require('./routers/template.router');
app.use('/api', templateRouter);

console.log('Server loaded');
// Listens
app.listen(PORT, ()=>{
    console.log("Magic happening on port: ", PORT);
});