class Template{
    constructor(template){
        this.template = template;
    }

    generateMessage(guest, company){
        // Create an array from the template
        const templateArray = this.template.split(" ");
        // Seperate punctuation from words
        // templateArray = this.preservePunc(templateArray);
        // Replace keys with the corresponding guest and company values
        // messageArray = this.placeValues(templateArray, guest, company);
        // Place punctuation in correct positions
        // messageArray = this.placePunc(messageArray);
        // Join array into final message string and return message
        // return messageArray.join(' ');
    }

}

module.exports = Template;