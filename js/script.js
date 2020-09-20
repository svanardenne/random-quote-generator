/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
    source: "H.P. Lovecraft",
    citation: "Supernatural Horror in Literature",
    year: "1927",
    tags: "literature, horror"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    tags: "business, inspirational"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    citation: "Beautiful Boy",
    year: "1980",
    tags: "music, inspirational"
  },
  {
    quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    source: "Oscar Wilde",
    tags: "literature"
  },
  {
    quote: "Go confidently in the direction of your dreams! Live the life you've imagined.",
    source: "Henry David Thoreau",
    tags: "inspirational"
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    source: "Confucius",
    tags: "philosophy"
  },
  {
    quote: "Life itself is the most wonderful fairy tale.",
    source: "Hans Christian Andersen",
    tags: "folklore, myth, stories"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = parseInt(Math.random() * 6);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  }
  if (randomQuote.tags) {
    html += `<span class="tags"> Tags: ${randomQuote.tags}</span>`
  }
  html += `</p>`
  console.log(html);
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * `getRandomColor` function
***/
function getRandomColor() {
  
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);