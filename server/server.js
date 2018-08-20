// Express require and app creation
const app = require('express')();

// Body Parser Require
const bodyParser = require('body-parser');

// Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Magic happening on port: ", PORT);
});