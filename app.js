
const cardArr = [
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'camp',
        img: 'images/camp.jpg'
    },
    {
        name: 'camp',
        img: 'images/camp.jpg'
    },
    {
        name: 'car',
        img: 'images/car.jpg'
    },
    {
        name: 'car',
        img: 'images/car.jpg'
    },
    {
        name: 'ice-cream',
        img: 'images/icecream.jpg'
    },
    {
        name: 'ice-cream',
        img: 'images/icecream.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    }
]
cardArr.sort(() => 0.5 - Math.random());
let cardsChosen = [];
let cardsIdChosen = [];
let cardsWon = [];
const resultDisplay = document.querySelector("#result");

const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('button');




//create your board 
function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}
//check for match

function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsIdChosen[0];
    const optionTwoId = cardsIdChosen[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('match found');
        cards[optionOneId].setAttribute('src', 'images/white.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white.jpg');
        cardsWon.push(cardsIdChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
        alert('sorry try again');
    }
    cardsChosen = [];
    cardsIdChosen = [];
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArr.length / 2) {
        resultDisplay.textContent = "Congratualtions";
        cardArr.sort(() => 0.5 - Math.random());
    }


}

//delete cards
function deleteCard() {
    cardsChosen = [];
    cardsIdChosen = [];
    cardsWon = [];
    cards = document.querySelectorAll('img');
    for (let i = 0; i < cardArr.length; i++) {
        cards[i].remove();
    }
    resultDisplay.textContent = " ";

}

//flip card
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArr[cardId].name);
    cardsIdChosen.push(cardId);
    this.setAttribute('src', cardArr[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard();


resetBtn.addEventListener('click', () => {
    deleteCard();
    cardArr.sort(() => 0.5 - Math.random());
    createBoard();
    alert('New Game!')
})



