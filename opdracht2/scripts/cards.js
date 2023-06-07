// JavaScript Document
console.log("howdy")

// async function getDecks() {

// const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6"

// let response = await fetch(url)
// let decks = await response.json()
// let deck_id = decks.deck_id
// }

// getDecks(deck_id)
const dealButton = document.querySelector(".dealButton")
const dealerList = document.querySelector(".dealerCards")
const playerList = document.querySelector(".playerCards")
const betText = document.querySelector(".betText")

const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=4"

function getCards() {
    getData(url).then(cards => {
        const card1 = cards.cards[0]
        const card2 = cards.cards[1]
        const card3 = cards.cards[2]
        const card4 = cards.cards[3]
        console.log(cards)

        const playerHTML =`
        <li><img src="${card1.image}" alt="${card1.code}"></li>
        <li><img src="${card2.image}" alt="${card2.code}"></li>`

        playerList.insertAdjacentHTML("beforeend", playerHTML)

        const dealerHTML =`
        <li><img src="${card3.image}" alt="${card3.code}"></li>
        <li><img src="${card4.image}" alt="${card4.code}"></li>`

        dealerList.insertAdjacentHTML("beforeend", dealerHTML)
    })
}

const newButtons = document.querySelector("section:last-of-type ul:nth-of-type(2)")

function showButtons() {
    newButtons.style.display = "flex"
    dealButton.style.display = "none"
    betText.style.display = "none"
}


async function getData(URL) {
	return (
		fetch(URL)
		.then ( response => response.json() )
		.then ( jsonData => jsonData )
	);
}

function combineFuctions() {
    showButtons()
    getCards()
}

dealButton.onclick = combineFuctions







