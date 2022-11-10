const quotetext = document.getElementById("quoteId");
const authorId = document.getElementById("authorId");
const quoteBtn = document.getElementById("quoteBtn");



function randomQuote() {
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        // console.log(result);
        quotetext.innerText = result.content;
        authorId.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        
    });
}


quoteBtn.addEventListener("click", randomQuote);

randomQuote();