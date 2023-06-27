// JavaScript Document
const dealButton = document.querySelector(".dealButton")
const dealerList = document.querySelector(".dealerCards")
const playerList = document.querySelector(".playerCards")
const betText = document.querySelector(".betText")
const backCard = document.querySelector(".backDealer")
const backPlayer = document.querySelector(".backPlayer")

const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=4"


// Get data from api
async function getData(URL) {
    return (
        fetch(URL)
            .then(response => response.json())
            .then(jsonData => jsonData)
    )
}


// Show the back of the cards
function getBackCards() {

    backCard.classList.add('cardAnimation')
    backPlayer.classList.add('cardAnimation')
    backCard.style.display = 'grid'
    backPlayer.style.display = 'grid'
}

function getCards() {
    getData(url).then(cards => {
        const card1 = cards.cards[0]
        const card2 = cards.cards[1]
        const card3 = cards.cards[2]
        const card4 = cards.cards[3]
        console.log(cards)

        const playerHTML = `
        <li><img src="${card1.image}" alt="${card1.code}"></li>
        <li><img src="${card2.image}" alt="${card2.code}"></li>`

        playerList.insertAdjacentHTML("beforeend", playerHTML)

        const dealerHTML = `
        <li><img src="${card3.image}" alt="${card3.code}"></li>
        <li><img src="${card4.image}" alt="${card4.code}"></li>`

        dealerList.insertAdjacentHTML("beforeend", dealerHTML)
    })
}

const newButtons = document.querySelector("section:last-of-type ul:nth-of-type(2)")


// Show new buttons, display cards and hide h1
function showButtons() {
    newButtons.style.display = "flex"
    dealButton.style.display = "none"
    betText.style.display = "none"
    backCard.style.display = "none"
    backPlayer.style.display = "none"
}


function combineButton() {
    getBackCards()
    showButtons()
}

// call the 2 functions
dealButton.onclick = combineButton()












