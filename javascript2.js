// Constructor function for quote object
function quote(beginningList, middleList, endList) {
    this.beginningList = beginningList;
    this.middleList = middleList;
    this.endList = endList;
}

// Assign a display function to the Quote prototype
quote.prototype.display = function () {

    let fullQuote = "";
    // Object for loop generates random sentence
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
           fullQuote+=this[key][Math.floor(Math.random()*this[key].length)];
        }
    }

    return fullQuote;
}

// Create a new Silly Quote Object with beginning, middle, and end list fragments
var silly = new quote(
    [
        'May your pockets ',
        'May your cheeks ',
        'May your friends '
    ],
    [
        'never smell like ',
        'always be full of ',
        'always bring you '
    ],
    [
        'second breakfast.',
        'the breath of an orc.',
        'potatoes.'
    ]
);

// Create a new Serious quote object with beginning, middle, and end list fragments
var serious = new quote(
    [
        'By the beard of Thorin Oakenshield ',
        'By the light of the Silmarils ',
        'By the fires of Mount Doom '
    ],
    [
        'may your battles ',
        'may the stride of your boots ',
        'may your quest for justice '
    ],
    [
        'bring light to every corner of the realm.',
        'sunder the armies of your enemies.',
        'defend the truth.'
    ]
);

//Declare global variables
var quoteNumber;
var quoteType;

// Store data gathered from functions into variables
quoteNumber = howMany();

quoteType = whatKind();

showQuotes();

// Function to prompt user for how many quotes should be generated. If improper number is inputed, error is prompted and the function starts over
function howMany() {
    var quoteNumber = prompt('How many quotes would you like to generate? (Choose a number 1-5)', "1-5");
    if (quoteNumber >= 1 && quoteNumber <= 5) {
            return quoteNumber;
    } else {
        alert('You must put in a number 1-5');
        return howMany();
    }
}

// Function to prompt user for what kind of quotes should be generated. If not inputed correctly, error is prompted and the function starts over
function whatKind() {
    let quoteType = prompt('Would you like a \'silly\' quote or a \'serious\' quote?', 'silly or serious');
    if (quoteType === 'silly' || quoteType === 'serious') {
        return quoteType;
    } else {
        alert('You must enter silly or serious');
        return whatKind();
    }
}

// Based on the inputs this function displays the quotes in the HTML page
function showQuotes() {
    if(quoteType == "serious") {
        for(i=0;i<quoteNumber;i++){
            document.getElementById('quoteDisplay').innerHTML += serious.display() + "<br>" + "<br>";
        }
    }
    else {
        for (i = 0; i < quoteNumber; i++) {
            document.getElementById('quoteDisplay').innerHTML += silly.display() + "<br>" + "<br>";
    }
} 
}

// Function reloads page to start over and is linked to 'start over' html button
function refreshQuote() {
    location.reload();
}
