/*
    The Template Class is used for creating new instances of the Template class
        and storing those as objects in variables.

    This class will be reusable for however many message templates are to be created

    Only one method is named using normal camelcase conventions, all others 
        start with an underscore in order to indicate that they are not meant to be 
        called outside of the class itself.

    Note:
        This template class contains some hard coded logic for determining the values of 
            known nested keys in either the guest or company objects.

        Therefore this solution only works if the data structure of both the guest objects and company
            objects remains the same and unchanged.  Should the structure change, it is likely that 
            this solution would need refactoring.
        
        I considered creating a recursive module that can dig through the guest and company objects
            in search of a key value pair, however I determined that the this would constitute such a great
            demand on the performance of the program that it is contraindicated.

        A recursive solution would require recursively checking each word in the template against each level of 
            an object without any way to identify which words in the template are meant to be keys, and which are not.

        Therefore, although the hard coded logic solution is inflexible, it seems to be the best solution at this time
            given the current constraints.
*/
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
        // messageArray = this._placeValues(templateArray, guest, company);
        // Place punctuation in correct positions
        // messageArray = this.placePunc(messageArray);
        // Join array into final message string and return message
        // return messageArray.join(' ');
    }

    // checkForPunc method evaluates a character to determine if it is punctuation
    _checkForPunc(char){
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
    _preservePunc(array){
        let mutableArray = array;
        for(let i = 0; i < mutableArray.length; i){
            let word = mutableArray[i];
            if(this._checkForPunc(word[word.length - 1])){
                console.log("Punc found");
                // Replace words with punctuation on the end with the word and the punctuation seperated
                mutableArray.splice(i, 1, word.substr(0, word.length - 1), word.substr(word.length - 1, 1));
                i++;
            }
        }
        return mutableArray;
    }

    _checkForKnownNestedGuestKeys(key){
        switch(key){
            case "roomNumber":
            case "startTimestamp":
            case "endTimestamp":
                return true;
            default:
                return false;
        }
    }

    _placeValues(array, guest, company){
        let mutableArray = array;
        for(let char of mutableArray){
            let index = mutableArray.indexOf(char);
            if(this._checkForKnownNestedGuestKeys(char)){
                mutableArray[index] = guest.reservation[char];
            } else if(guest[char]){
                mutableArray[index] = guest[char];
            } else if(company[char]){
                mutableArray[index] = company[char];
            }
        }
        return mutableArray;
    }

}

module.exports = Template;