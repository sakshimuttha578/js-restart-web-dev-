const quote = document.getElementById('quote')
const quoteBtn = document.getElementById('quotebtn')

async function getQuote() {  //async kyuki time lagta hai delayed operations
    const response = await fetch('https://dummyjson.com/quotes/random');   //awit kyuki aane me time lagta hai varna js will process before data arrives
    const data = await response.json();  //json converts server response to js object
    quote.textContent = data.quote;
}

quoteBtn.addEventListener('click', () => {
    getQuote()
})