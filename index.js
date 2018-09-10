var quotes =[
   "Speed has never killed anyone. Suddenly becoming stationary, that's what gets you. © Jeremy Clarkson",
    "International hand of freindship. A cigarette © Jeremy Clarkson",
    "This is what should be meant by people power. The power for people to choose which of the government’s petty, silly, pointless laws they want to obey. And which they don’t.© Jeremy Clarkson' ",
    "How hard can it be? © Jeremy Clarkson",
    "No, no, no. There's no such thing as cheap and cheerful. It's cheap and nasty & expensive and cheerful © Jeremy Clarkson",
    "If you are clinically insane, by which I mean you wake up in the morning, and you think you are an onion, this is your car, (about the BMW X3) © Jeremy Clarkson",
    "We are going to have to stop penalising people for making that most human of gestures- mistake © Jeremy Clarkson",
    "In the olden days it was easy to make a television work.You plugged an aerial cable into the back, then bashed the top with your fist until, eventually, Hughie Green stopped jumping up and down.© Jeremy Clarkson"
    
],randomResult;

var mainButton = document.querySelector('img');

function clickRandom(){
  mainButton.addEventListener('click', function(){
    randomResult = quotes[Math.floor(Math.random() * quotes.length)] 
     document.getElementById('quoteResult').innerHTML = randomResult
    
})
}

clickRandom();




