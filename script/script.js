const cardArray = [
    {
        name: 'fries',
        img: "images/fries.png",
    },
    {
        name: 'hotdog',
        img: "images/hotdog.png",
    },
    {
        name: 'cheeseburger',
        img: "images/cheeseburger.png",
    },
    {
        name: 'ice-cream',
        img: "images/ice-cream.png",
    },
    {
        name: 'pizza',
        img: "images/pizza.png",
    },
    {
        name: 'milkshake',
        img: "images/milkshake.png",
    },
    {
        name: 'fries',
        img: "images/fries.png",
    },
    {
        name: 'hotdog',
        img: "images/hotdog.png",
    },
    {
        name: 'cheeseburger',
        img: "images/cheeseburger.png",
    },
    {
        name: 'ice-cream',
        img: "images/ice-cream.png",
    },
    {
        name: 'pizza',
        img: "images/pizza.png",
    },
    {
        name: 'milkshake',
        img: "images/milkshake.png",
    }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const result = document.querySelector("#result");
let cardChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        gridDisplay.style.display = 'flex';
        gridDisplay.style.width = "400px"
        gridDisplay.style.height = "100px"
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard();
function checkMatch() {
    const cards = document.querySelectorAll("#grid img")
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
    if(optionOneId == optionTwoId) { 
        alert("you have clicked the same image");
    }

    if (cardChosen[0] == cardChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen);
    } else {
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
    }
    result.innerHTML = cardsWon.length 
    cardChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        result.innerHTML = "Congratulation!"
    }
}
function flipCard() {
    const cardId = this.getAttribute("data-id"); // this will get us every data card we CLICKED
    // Check if the card has already been chosen
    if (cardsChosenIds.includes(cardId)) {
        return; // Don't proceed if the card has already been chosen
    }    
    cardArray[cardId].name;
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2) {
        // Disable further clicks while match check is in progress
        gridDisplay.removeEventListener('click', flipCard);

        setTimeout(() => {
            checkMatch();
            // Re-enable clicks after match check is complete
            gridDisplay.addEventListener('click', flipCard);
        }, 200);
    }
}