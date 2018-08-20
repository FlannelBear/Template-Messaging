class Template{
    constructor(template){
        this.template = template;
    }

    generateMessage(guest, company){
        // Create an array from the template
        const templateArray = this.template.split(" ");
        // Seperate punctuation from words
        templateArray = this.preservePunc(templateArray);
        // Replace keys with the corresponding guest and company values
        // messageArray = this.placeValues(templateArray, guest, company);
        // Place punctuation in correct positions
        // messageArray = this.placePunc(messageArray);
        // Join array into final message string and return message
        // return messageArray.join(' ');
    }

    // checkForPunc method evaluates a character to determine if it is punctuation
    checkForPunc(char){
        switch(char){
            case '.':
            case ',':
            case '?':
            case '!':
            case ';':
            case ':':
                return true;
            default:
                return false;
        }
    }

    // preservePunc method searches array for words with punctuation and splits them
    preservePunc(array){
        let mutableArray = array;
        for(let i = 0; i < mutableArray.length; i){
            let word = mutableArray[i];
            if(this.checkForPunc(word[word.length - 1])){
                console.log("Punc found");
                // Replace words with punctuation on the end with the word and the punctuation seperated
                mutableArray.splice(i, 1, word.substr(0, word.length - 1), word.substr(word.length - 1, 1));
                i++;
            }
        }
        return mutableArray;
    }

}

module.exports = Template;