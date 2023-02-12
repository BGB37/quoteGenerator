// Initializing the variables in JS.

const container = document.getElementById('container');
const quoteText = document.getElementById('quote-text');
const authorName = document.getElementById('author-name');
const btn = document.getElementById('new-quote-btn');
const quoteCounter = document.getElementById('quote-counter');
const previousQuoteBtn = document.getElementById('previous-quote-btn');
const shownQuotes = [];
let count = 0;
let shownQuoteCounter = 0;
let temp = 0;
var i = 0;
var iIsLessThanZero;
let newQuoteShown;
const quotes = [
    {    /*0*/
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        person:'- Nelson Mandela'
    },
    {   /*1*/
        quote: '"The way to get started is to quit talking and begin doing."',
        person:'- Walt Disney'
    },
    {   /*2*/
        quote: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
        person:'- Steve Jobs'
    },
    {   /*3*/
        quote: '"If life were predictable it would cease to be life, and be without flavor."',
        person:'- Eleanor Roosevelt'
    },
    {   /*4*/
        quote: '"You must be the change you wish to see in the world."',
        person:'- Mahatma Gandhi'
    },  
    {   /*5*/
        quote: '"Whether you think you can or you think you can’t, you’re right."',
        person:'- Henry Ford '
    }, 
    {   /*6*/
        quote: '"Life is like a box of chocolates. You never know what you’re going to get."',
        person:'- Forrest Gump'
    },
    {   /*7*/
        quote: '"Teachers are the one and only people who save nations."',
        person:'- Mustafa Kemal Atatürk'
    }, 
    {   /*8*/
        quote: '"Unless a nation\'s life faces peril, war is murder."',
        person:'- Mustafa Kemal Atatürk'
    },
    {   /*9*/
        quote: '"I have no special talent. I am only passionately curious."',
        person:'- Albert Einstein'
    },
    {   /*10*/
        quote: '"If you can\'t explain it simply, you don\'t understand it well enough."',
        person:'- Albert Einstein'
    },
    {   /*11*/
    quote: '"Life shrinks or expands in proportion with one\'s courage."',
    person:'- Anaïs Nin'
    },
    {   /*12*/
        quote: '"Never let the fear of striking out keep you from playing the game."',
        person:'- Babe Ruth'
    },
    {   /*13*/
        quote: '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
        person:'- Thomas A. Edison'
    },
    {   /*14*/
        quote: '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."',
        person:'- Dr. Seuss'
    },
    {   /*15*/
        quote: '"The past cannot be changed. The future is yet in your power."',
        person:'- Confucius'
    },
    {   /*16*/
        quote: '"Start where you are. Use what you have. Do what you can."',
        person:'- Arthur Ashe'
    },
    {   /*17*/
        quote: '"Education: the path from cocky ignorance to miserable uncertainty."',
        person:'- Mark Twain'
    },
    {   /*18*/
        quote: '"What you do speaks so loudly that I cannot hear what you say."',
        person:'- Ralph Waldo Emerson'
    },
    {   /*19*/
    quote: '"Great minds discuss ideas; average minds discuss events; small minds discuss people."',
    person:'- Eleanor Roosevelt'
    },
    {   /*20*/
    quote: '"The future belongs to those who prepare for it today."',
    person:'- Malcolm X'
    },
    {   /*21*/
    quote: '"The only impossible journey is the one you never begin."',
    person:'- Tony Robbins'
    },
    {   /*22*/
    quote: '"Insanity is doing the same thing over and over again and expecting different results."',
    person:'- Albert Einstein'
    },
    {   /*23*/
    quote: '"What you do makes a difference. And you have to decide what kind of difference you want to make."',
    person:'- Jane Goodall'
    },
    {   /*24*/
    quote: '"The cure for pain is in the pain."',
    person:'- Rumi'
    },
    {   /*25*/
    quote: '"The work of today is the history of tomorrow, and we are its makers."',
    person:'- Juliette Gordon Low'
    },
    {   /*26*/
    quote: '"Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails."',
    person:'- Mark Twain'
    },
    {   /*27*/
    quote: '"I have not failed. I\'ve just found 10,000 ways that won\'t work."',
    person:'- Thomas A. Edison'
    },
    {   /*28*/
    quote: '"In the depth of winter, I finally learned that within me there lay an invincible summer."',
    person:'- Albert Camus'
    },
    {   /*29*/
    quote: '"Don\'t be satisfied with stories, how things have gone with others. Unfold your own myth."',
    person:'- Rumi'
    },
    {   /*30*/
    quote: '"Success is a journey, not a destination."',
    person:'- Arthur Ashe'
    },
    {   /*31*/
    quote: '"Nothing in life is to be feared, it is only to be understood.Now is the time to understand more, so that we may fear less."',
    person:'- Marie Curie'
    },
    {   /*32*/
    quote: '"Life isn\'t about waiting for the storm to pass... It\'s about learning to dance in the rain."',
    person:'- Vivian Greene'
    },
    {   /*33*/
    quote: '"What we think, we become. All that we are arises with our thoughts.With our thoughts, we make the world."',
    person:'- The Buddha'
    },
    {   /*34*/
    quote: '"Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing."',
    person:'- Helen Keller'
    },
    {   /*35*/
    quote: '"If you spend too much time thinking about a thing, you’ll never get it done. Make at least one definitive move daily toward your goal."',
    person:'- Bruce Lee'
    },
    {   /*36*/
    quote: '"When you know that you\'re capable of dealing with whatever comes, you have the only security the world has to offer."',
    person:'- Harry Browne'
    },
    {   /*37*/
    quote: '"Science is the most reliable guide in life."',
    person:'- Mustafa Kemal Ataturk'
    },
    {   /*38*/
    quote: '"Victory is for those who can say "Victory is mine". Success is for those who can begin saying "I will succeed" and say "I have succeeded" in the end."',
    person:'- Mustafa Kemal Ataturk'
    },
    {   /*39*/
    quote: '"If one day, my words are against science, choose science."',
    person:'- Mustafa Kemal Ataturk'
    },
    {   /*40*/
    quote: '"People, who know that, that they will not be able to rest along the way when they took a path, will never get tired."',
    person:'- Mustafa Kemal Ataturk'
    }
    ,
    {   /*41*/
    quote: '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
    person:'- Thomas A. Edison'
    }
];

// A function to refresh the page.
function refreshThePage() {  
    document.location.reload(true);
}

// -------------------------------- NEXT QUOTE BUTTON --------------------------------
btn.addEventListener('click', function() 
{    
    if(previousQuoteBtn.style.visibility == "hidden" && shownQuotes.length != 0) { // If user counted down to see shownQuotes and reached the beginning.
        previousQuoteBtn.style.visibility = "visible";
        i = 0;
        quoteText.innerText = shownQuotes[i].quote;
        authorName.innerText = shownQuotes[i].person;
        newQuoteShown = false;
    } else if(previousQuoteBtn.style.visibility == "hidden" && shownQuotes.length == 0) { // If user pressed previous quote button before pressing next quote button and now pressed new quote button.
        previousQuoteBtn.style.visibility = "visible";
        let random = Math.floor(Math.random() * quotes.length);  // If shownQuotes.length is 0, no need to check if the quote[random] has shown before.  
        quoteText.innerText = quotes[random].quote;
        authorName.innerText = quotes[random].person;
        shownQuotes.push(quotes[random]);
        console.log(shownQuotes);
        newQuoteShown = true;
    }else if(i == 0 && newQuoteShown == false && shownQuotes.length > 1) {
        i++;
        quoteText.innerText = shownQuotes[i].quote;
        authorName.innerText = shownQuotes[i].person;
    } else if(i == 0 && newQuoteShown == false && shownQuotes.length > 0) {
        let random = Math.floor(Math.random() * quotes.length);
        while(shownQuotes.includes(quotes[random])) 
        {
            random = Math.floor(Math.random()*quotes.length);
        }
        quoteText.innerText = quotes[random].quote;
        authorName.innerText = quotes[random].person;
        shownQuotes.push(quotes[random]);
        console.log(shownQuotes);
        newQuoteShown = true;
    }
    else if(i < shownQuotes.length - 1 && newQuoteShown == false) {
        i++;
        quoteText.innerText = shownQuotes[i].quote;
        authorName.innerText = shownQuotes[i].person;
    }
    else  // If a new quote to be shown
    {
        //console.log("next quote else part executed");
        newQuoteShown = true;
        let random = Math.floor(Math.random() * quotes.length);
        while(shownQuotes.includes(quotes[random])) 
        {
            random = Math.floor(Math.random()*quotes.length);
        }
        quoteText.innerText = quotes[random].quote;
        authorName.innerText = quotes[random].person;
        i = shownQuotes.length - 1;
        // Add the shown quotes in to an array to show them again when clicked on the "Previous Quote" button.
        shownQuotes.push(quotes[random]);
        console.log(shownQuotes);
        // Code Counter
        count++;
        //console.log(count);
        if (shownQuotes.length == quotes.length)
        {
            quoteCounter.innerText = " You've seen all the quotes. The page will be refreshed in 10 seconds." ;
            btn.style.visibility = "hidden";
            previousQuoteBtn.style.visibility = "hidden";
            setTimeout(refreshThePage, 9000); // It did not work until i passed a function as the first argument.
        } 
        else 
        {
            quoteCounter.innerText = "You've seen " + count +"/" + quotes.length + " quotes.";
        }
    }
});
// -------------------------------------------------------------------------------------------

    //  -------------------------------- PREVIOUS QUOTE BUTTON --------------------------------
    /* let i = 2; */
    previousQuoteBtn.addEventListener('click', function() 
{   
    if(shownQuotes.length > 1 && newQuoteShown) { // Only if pressed after a new quote has shown.
        i = shownQuotes.length - 2;
        console.log("shownQuotes.length > 1 && newQuoteShown -- i:" + i);
        quoteText.innerText = shownQuotes[i].quote;
        authorName.innerText = shownQuotes[i].person;
    } else if(i > 0) {
        i--;
        console.log("prevbtn -- i--; -- i:" + i);
        quoteText.innerText = shownQuotes[i].quote;
        authorName.innerText = shownQuotes[i].person;
    } else {
        quoteText.innerText = "That's the beginning of the list.";
        authorName.innerText = "";      
        previousQuoteBtn.style.visibility = "hidden";
    } 
    newQuoteShown = false;
});
// -------------------------------------------------------------------------------------------


/* Ideas about the project
- Add a timer to show the time spent in the site.
- Don't show same quote foe two times in a session. You can create an array of the objects that have been shown and show the new quote if that is not a member of the array.
- Add a "Save Quote" button.
- Can i clear the cash using the codes?
*/
