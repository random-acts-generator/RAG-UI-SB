
let container = document.querySelector('.headerQuote');
var content = "";

function replaceContentInContainer(content) {    
container.innerHTML = content;
container.textContent = content;
console.log(content);
}

function setContent() {
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    

    switch (randomNumber) {
        case 1:
            content = 'Sometimes it takes only one act of kindness and caring to change a person’s life.';
            break;

        case 2:
            content = 'Do things for people not because of who they are or what they do in return, but because of who you are.';
            break;

        case 3:
            content = 'Carry out a random act of kindness, with no expectation of reward.';
            break;

        case 4:
            content = 'Remember there’s no such thing as a small act of kindness.';
            break;

        case 5:
            content = 'What wisdom can you find that is greater than kindness?';
            break;

        case 6:
            content = 'You can accomplish by kindness what you cannot by force.';
            break;

        case 7:
            content = 'Kindness can become its own motive. We are made kind by being kind.';
            break;

        case 8:
            content = 'We can’t help everyone, but everyone can help someone.';
            break;

        case 9:
            content = 'Unexpected kindness is the most powerful, least costly, and most underrated agent of human change.';
            break;

        case 10:
            content = 'Kindness begins with the understanding that we all struggle.';
            break;

        default:
            content = 'Sometimes it takes only one act of kindness and caring to change a person’s life.';
            break;
    }
    return content;
}

function intervalContent() {
    setContent();
    replaceContentInContainer(content);
}
setInterval(intervalContent, 10000);




