/* ============================================= */
/*                   Script                      */
/* ============================================= */

//Quotes Array
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

//Uses a random number to fetch a quote from the quotes array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//Creates 3 variables, assigns them random numbers, and uses those numbers to
//create an rgb value for the background-color of the body of the doucment
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${r}, ${b}, ${g})`;
  document.body.style.backgroundColor = randomColor;
}

//Calls getRandomQuote(), creates a variable containing html based on array data, prints
//it to the screen, and calls getRandomColor() to change the background color
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
  document.getElementById('quote-box').innerHTML = html; 
  getRandomColor();
}

//Sets a time interval of 10 seconds and changes the quote and background color
//at each interval
let timer = setInterval(() => {
  printQuote();
  getRandomColor();
}, 10000);

//resets the interval on printQuote() and getRandomColor()
function resetInterval() {
  clearInterval(timer);
  timer = setInterval(() => {
    printQuote();
    getRandomColor();
  }, 10000);
}

//On click, calls printQuote() and getRandomColor()
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//On click, clears the timer interval and calls resetInterval()
document.getElementById('load-quote').addEventListener('click', () => {
  resetInterval();
});