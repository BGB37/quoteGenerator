const container = document.getElementById('container');
const quoteText = document.getElementById('quote-text');
const authorName = document.getElementById('author-name');
const btn = document.getElementById('btn');
const quoteCounter = document.getElementById('quote-counter');
let count = 0;
let temp = 0;
const quotes = [
    {
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        person:'- Nelson Mandela'
    },
    {
        quote: '"The way to get started is to quit talking and begin doing."',
        person:'- Walt Disney'
    },
    {
        quote: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
        person:'- Steve Jobs'
    },
    {
        quote: '"If life were predictable it would cease to be life, and be without flavor."',
        person:'- Eleanor Roosevelt'
    },
    {
        quote: '"You must be the change you wish to see in the world."',
        person:'- Mahatma Gandhi'
    },
    {
        quote: '"Whether you think you can or you think you can’t, you’re right."',
        person:'- Henry Ford '
    }
    , {
        quote: '"Life is like a box of chocolates. You never know what you’re going to get."',
        person:'- Forrest Gump'
    },
    {
        quote: '"Teachers are the one and only people who save nations."',
        person:'- Mustafa Kemal Atatürk'
    }, 
    {
        quote: '"Unless a nation\'s life faces peril, war is murder."',
        person:'- Mustafa Kemal Atatürk'
    },
    {
        quote: '"I have no special talent. I am only passionately curious."',
        person:'- Albert Einstein'
    },
    {
        quote: '"If you can\'t explain it simply, you don\'t understand it well enough."',
        person:'- Albert Einstein'
    },
    {
    quote: '"Life shrinks or expands in proportion with one\'s courage."',
    person:'- Anaïs Nin'
    },
    {
        quote: '"Never let the fear of striking out keep you from playing the game."',
        person:'- Babe Ruth'
    },
    {
        quote: '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
        person:'- Thomas A. Edison'
    },
    {
        quote: '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."',
        person:'- Dr. Seuss'
        }
]


//What will happen when button is clicked?

btn.addEventListener('click', function() {
    
    let random = Math.floor(Math.random()*quotes.length);
    quoteText.innerText = quotes[random].quote;
    authorName.innerText = quotes[random].person;
    
    // Code Counter
    if(temp != random) {
    count++;
    quoteCounter.innerText = "You've seen " + count + " quotes.";
    } else {
        quoteCounter.innerText = "You've seen this quote before.";
    }
    temp = random;

});
    
   
   