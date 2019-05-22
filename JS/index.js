
/* Add the inner divs to the header-content elements child array*/
let headerDiv = document.querySelector('.header-content');
let childHeaderQuoteDiv = document.querySelector('.headerQuoteDiv');
let childHeaderImgDiv = document.querySelector('.headerImgDiv');
let childButton = document.querySelector('.ctaBtn');
let headerQuote = document.querySelector('.headerQuote');
let headerIMG = document.querySelector('.headerIMG');
childHeaderImgDiv.appendChild(headerIMG);
childHeaderQuoteDiv.appendChild(headerQuote);
childHeaderQuoteDiv.appendChild(childButton);
headerDiv.appendChild(childHeaderQuoteDiv);
headerDiv.appendChild(childHeaderImgDiv);

// Use the button element we already retrieved to set an event listener
childButton.addEventListener('click', function() {
    window.open("https://random-acts-generator.netlify.com/login");
})

