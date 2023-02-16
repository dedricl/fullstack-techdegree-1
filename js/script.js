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
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source: 'Abraham Lincoln',
    tags: 'politics'
  },
  {
    quote:"If you do the work you get rewarded. There are no shortcuts in life.",
    source:"Michael Jordan"
  },
  {
    quote:"May the Force be with you.",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars",
    year: 1977
  },
  {
    quote: "Whoever is happy will make others happy too.",
    source: "Anne Frank"
  },
  {
    quote: "If you really look closely, most overnight successes took a long time.",
    source: "Steve Jobs"
  }
];



/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {

  let randomNumber = Math.floor(Math.random() * quotes.length  ) 
  return quotes[randomNumber];
};

const backgroundColor = () => {
  let color = Math.floor(Math.random() * 255)
  return color
}


/***
 * `printQuote` function
***/
const printQuote = () => {
  const randomQuote = getRandomQuote();

  let html = `<p class = "quote">${randomQuote.quote}</p>
              <p class = "source">${randomQuote.source}`

              if (randomQuote.citation) {
               html += `<span class = "citation">${randomQuote.citation}</span>`
              }
              if (randomQuote.year) {
                html += `<span class = "year">${randomQuote.year}</span>`
              }
              if (randomQuote.tags) {
                html += `<span class = "year">${randomQuote.tags}</span>`
              }
              html += `</p>`

  document.getElementById('quote-box').innerHTML = html;  
  document.body.style.backgroundColor = `rgb(${backgroundColor()},${backgroundColor()},${backgroundColor()})`   
};
 //document.body.innerHTML

 setInterval(printQuote,20000)


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


