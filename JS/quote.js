
class Quotes {
    constructor(element, content) {
        this.element = element;
        this.content = content;        
        // this.element.style.animationName = 'fadein';
        // this.element.style.animationDuration = '2s';        
    }
   
}

let kindnessQuote = new Quotes(document.querySelector('.headerQuote'), "");
let quoteList = [
    'Sometimes it takes only one act of kindness and caring to change a person’s life',
    'Do things for people not because of who they are or what they do in return, but because of who you are',
    'Carry out a random act of kindness, with no expectation of reward',
    'Remember there’s no such thing as a small act of kindness',
    'What wisdom can you find that is greater than kindness',
    'You can accomplish by kindness what you cannot by force',
    'Kindness can become its own motive. We are made kind by being kind',
    'We can’t help everyone, but everyone can help someone',
    'Kindness begins with the understanding that we all struggle'
]

// Randomly select the qoute to display
function setContent() {
    var randomNumber = Math.floor((Math.random() * 10) + 1);    
    let returnQuote = "";
    let index = randomNumber - 1;

    quoteList.find(function(element) {
        returnQuote = quoteList[index];
        if (element === returnQuote) {            
            kindnessQuote.content = returnQuote;
        }    
    })

    // Sanity check incase the content is empty or undefined we don't want the quote on the main page to disappear
    if (kindnessQuote.content === undefined || kindnessQuote === "") {
        kindnessQuote.content = 'Sometimes it takes only one act of kindness and caring to change a person’s life';
    }

}

function replaceContentInContainer() { 
    kindnessQuote.element.classList.toggle('animateQuote');    
    kindnessQuote.element.innerHTML = kindnessQuote.content;    
    }
function intervalContent() {    
    setContent();
    replaceContentInContainer(kindnessQuote.content);
}

// Set the quote to change every 10 seconds
setInterval(intervalContent, 7000);