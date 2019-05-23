
/* For some reason some elements were not properly set as children so I manually appendChild in code*/
let headerDiv = document.querySelector('.header-content');
let childHeaderQuoteDiv = document.querySelector('.headerQuoteDiv');
let childHeaderImgDiv = document.querySelector('.headerImgDiv');
let childButton = document.querySelectorAll('.ctaBtn');
let headerQuote = document.querySelector('.headerQuote');
let headerIMG = document.querySelector('.headerIMG');
let buttonDiv = document.querySelector('.buttonDiv');
let imageBottom = document.querySelector('.imgBottom');
let bottomSection = document.querySelector('.imageSection');
bottomSection.appendChild(imageBottom);
childHeaderImgDiv.appendChild(headerIMG);
childHeaderQuoteDiv.appendChild(headerQuote);
childHeaderQuoteDiv.appendChild(buttonDiv);
headerDiv.appendChild(childHeaderQuoteDiv);
headerDiv.appendChild(childHeaderImgDiv);

// Use the button element we already retrieved to set an event listener
childButton[0].addEventListener('click', function() {
    window.open("https://random-acts-generator.netlify.com/login");
})
childButton[1].addEventListener('click', function() {
    window.open("https://random-acts-generator.netlify.com");
})

