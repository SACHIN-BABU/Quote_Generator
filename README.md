# Quote_Generator
## Date:10-07-2025
## Sachin B
## 212222060207

## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>InspireMe</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>InspireMe</h1>
    <div class="quote-box">
      <p id="quote">Click below for motivation!</p>
      <span id="author">- Unknown</span>
    </div>
    <button onclick="getQuote()">Get Quote</button>
    <a id="tweet" target="_blank">Tweet this</a>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.quote-box {
  margin-bottom: 20px;
}

#quote {
  font-size: 18px;
  margin-bottom: 10px;
  transition: opacity 0.5s;
}

#author {
  display: block;
  font-style: italic;
  color: #555;
}

button {
  padding: 10px 20px;
  border: none;
  background: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

button:hover {
  background: #0056b3;
}

#tweet {
  display: inline-block;
  color: #007BFF;
  text-decoration: none;
  margin-top: 10px;
}

#tweet:hover {
  text-decoration: underline;
}
```

## Js:
```
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
```
## Output:
<img width="1919" height="857" alt="Screenshot 2025-07-10 224516" src="https://github.com/user-attachments/assets/19a40d1d-38b9-42b2-b00e-a1a9933c9199" />


## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
