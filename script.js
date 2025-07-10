const quotes = [
  { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
  { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  const quoteText = document.getElementById('quote');
  const authorText = document.getElementById('author');
  const tweetBtn = document.getElementById('tweet');

  quoteText.style.opacity = 0;
  authorText.style.opacity = 0;

  setTimeout(() => {
    quoteText.innerText = quote.text;
    authorText.innerText = `- ${quote.author}`;
    quoteText.style.opacity = 1;
    authorText.style.opacity = 1;

    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
  }, 300);
}
