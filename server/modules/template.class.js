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

let verbose = true;

class Template{
    constructor(template){
        this.template = template;
    }

    async generateMessage(guest, company){
        verbose ? console.log("Generate message") : null;
        // Create an array from the template
        let templateArray = this.template.split(" ");
        verbose ? console.log("template array: ", templateArray) : null;
        // Seperate punctuation from words
        templateArray = this._preservePunc(templateArray);
        verbose ? console.log("template array with punc: ", templateArray) : null;
        // Replace keys with the corresponding guest and company values
        let messageArray = this._placeValues(templateArray, guest, company);
        verbose ? console.log("message array: ", messageArray) : null;
        // Place punctuation in correct positions
        messageArray = this._placePunc(messageArray);
        verbose ? console.log("message array with punc: ", messageArray) : null;
        // Join array into final message string and return message
        return messageArray.join(' ');
    }

    // checkForPunc method evaluates a character to determine if it is punctuation
    _checkForPunc(char){
        verbose ? console.log("Check for punctuation: ", char) : null;
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
        verbose ? console.log("Preserve punctuation: ", array) : null;
        let mutableArray = array;
        for(let i = 0; i < mutableArray.length; i++){
            let word = mutableArray[i];
            verbose ? console.log(word) : null;
            verbose ? console.log(this._checkForPunc(word[word.length - 1])) : null;
            if(this._checkForPunc(word[word.length - 1])){
                verbose ? console.log("Punc found") : null;
                // Replace words with punctuation on the end with the word and the punctuation seperated
                mutableArray.splice(i, 1, word.substr(0, word.length - 1), word.substr(word.length - 1, 1));
                i++;
            }
        }
        return mutableArray;
    }

    // placePunc method searches array for punctuation and appends it to previous word.
    _placePunc(array){
        verbose ? console.log("Place punc") : null;
        let mutableArray = array;
        for(let i = 0; i < mutableArray.length; i++){
            let prevChar = mutableArray[i - 1];
            let char = mutableArray[i];
            if(this._checkForPunc(char)){
                // append the punctiation to the previous char
                mutableArray.splice(i-1, 2, prevChar + char);
                // decrement i as to not skip indices
                i--;
            }
        }
        return mutableArray;
    }

    // Check for the keys we know are nested in the Guest objects
    _checkForKnownNestedGuestKeys(key){
        verbose ? console.log("check nested") : null;
        switch(key){
            case "roomNumber":
            case "startTimestamp":
            case "endTimestamp":
                return true;
            default:
                return false;
        }
    }

    // Check each word in the templateArray as a key for the guest and company objects
    // If it's true that key in the array will be replaced with the value
    _placeValues(array, guest, company){
        verbose ? console.log("place values") : null;
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

const guests = require("../Guests.json");
const companies = require("../Companies.json");

const testGuest = guests[0];
verbose ? console.log("Guest: ", testGuest) : null;
const testCompany = companies[0];
verbose ? console.log("Company: ", testCompany) : null;
const testTemplate = "Hello firstName, and welcome to company in city.  Your room roomNumber is ready.";
verbose ? console.log("Template: ", testTemplate) : null;
let testMessage = new Template(testTemplate);
verbose ? console.log("test: ", testMessage.generateMessage(testGuest, testCompany)) : null;

module.exports = Template;