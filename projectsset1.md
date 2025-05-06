# Project releted to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-gyevq1ew?file=1-colorChanger%2Fstyle.css,1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution Code

## Project 1

```javascript
const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

button.forEach(function(button){
    console.log(button);

    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        
    })
    
})


## Project. 2

``` JavaScript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === '' || height < 0 || height != isNaN){
    results.innerHTML = `Please give a valid value ${height}`
  } else if (weight === '' || weight < 0 || weight != isNaN){
    results.innerHTML = `Please give a valid value ${weight}`
  } else 
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span> ${bmi} <span>`;
  }
})

```

## Project 3

``` JavaScript
const clock = document.getElementById('clock')

 setInterval(function(){
   const date = new Date()
   clock.innerHTML = date.toLocaleTimeString()
 }, 1000)

 ```

 ## Project 4

 ```javascript

 let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses ');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over. random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is to Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is to High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    let randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```
