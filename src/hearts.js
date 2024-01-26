import app from './_firebase.js'
import { getFirestore, addDoc, collection } from "firebase/firestore";
const db = getFirestore(app);

// let deck = ['hearts_ace', 'hearts_2', 'hearts_3', 'hearts_4', 'hearts_5', 'hearts_6', 'hearts_7', 'hearts_8', 'hearts_9', 'hearts_10', 'hearts_jack', 'hearts_queen', 'hearts_king',
			// 'spades_ace', 'spades_2', 'spades_3', 'spades_4', 'spades_5', 'spades_6', 'spades_7', 'spades_8', 'spades_9', 'spades_10', 'spades_jack', 'spades_queen', 'spades_king',
			// 'clubs_ace', 'clubs_2', 'clubs_3', 'clubs_4', 'clubs_5', 'clubs_6', 'clubs_7', 'clubs_8', 'clubs_9', 'clubs_10', 'clubs_jack', 'clubs_queen', 'clubs_king',
			// 'diamonds_ace', 'diamonds_2', 'diamonds_3', 'diamonds_4', 'diamonds_5', 'diamonds_6', 'diamonds_7', 'diamonds_8', 'diamonds_9', 'diamonds_10', 'diamonds_jack', 'diamonds_queen', 'diamonds_king']
let deck = [{'suit': 'clubs', 'value': '2', 'filePath': 'images/clubs_2.svg', 'order': 1}, {'suit': 'clubs', 'value': '3', 'filePath': 'images/clubs_3.svg', 'order': 2}, {'suit': 'clubs', 'value': '4', 'filePath': 'images/clubs_4.svg', 'order': 3}, {'suit': 'clubs', 'value': '5', 'filePath': 'images/clubs_5.svg', 'order': 4}, {'suit': 'clubs', 'value': '6', 'filePath': 'images/clubs_6.svg', 'order': 5}, {'suit': 'clubs', 'value': '7', 'filePath': 'images/clubs_7.svg', 'order': 6}, {'suit': 'clubs', 'value': '8', 'filePath': 'images/clubs_8.svg', 'order': 7}, {'suit': 'clubs', 'value': '9', 'filePath': 'images/clubs_9.svg', 'order': 8}, {'suit': 'clubs', 'value': '10', 'filePath': 'images/clubs_10.svg', 'order': 9}, {'suit': 'clubs', 'value': 'jack', 'filePath': 'images/clubs_jack.svg', 'order': 10}, {'suit': 'clubs', 'value': 'queen', 'filePath': 'images/clubs_queen.svg', 'order': 11}, {'suit': 'clubs', 'value': 'king', 'filePath': 'images/clubs_king.svg', 'order': 12}, {'suit': 'clubs', 'value': 'ace', 'filePath': 'images/clubs_ace.svg', 'order': 13}, {'suit': 'diamonds', 'value': '2', 'filePath': 'images/diamonds_2.svg', 'order': 14}, {'suit': 'diamonds', 'value': '3', 'filePath': 'images/diamonds_3.svg', 'order': 15}, {'suit': 'diamonds', 'value': '4', 'filePath': 'images/diamonds_4.svg', 'order': 16}, {'suit': 'diamonds', 'value': '5', 'filePath': 'images/diamonds_5.svg', 'order': 17}, {'suit': 'diamonds', 'value': '6', 'filePath': 'images/diamonds_6.svg', 'order': 18}, {'suit': 'diamonds', 'value': '7', 'filePath': 'images/diamonds_7.svg', 'order': 19}, {'suit': 'diamonds', 'value': '8', 'filePath': 'images/diamonds_8.svg', 'order': 20}, {'suit': 'diamonds', 'value': '9', 'filePath': 'images/diamonds_9.svg', 'order': 21}, {'suit': 'diamonds', 'value': '10', 'filePath': 'images/diamonds_10.svg', 'order': 22}, {'suit': 'diamonds', 'value': 'jack', 'filePath': 'images/diamonds_jack.svg', 'order': 23}, {'suit': 'diamonds', 'value': 'queen', 'filePath': 'images/diamonds_queen.svg', 'order': 24}, {'suit': 'diamonds', 'value': 'king', 'filePath': 'images/diamonds_king.svg', 'order': 25}, {'suit': 'diamonds', 'value': 'ace', 'filePath': 'images/diamonds_ace.svg', 'order': 26}, {'suit': 'spades', 'value': '2', 'filePath': 'images/spades_2.svg', 'order': 27}, {'suit': 'spades', 'value': '3', 'filePath': 'images/spades_3.svg', 'order': 28}, {'suit': 'spades', 'value': '4', 'filePath': 'images/spades_4.svg', 'order': 29}, {'suit': 'spades', 'value': '5', 'filePath': 'images/spades_5.svg', 'order': 30}, {'suit': 'spades', 'value': '6', 'filePath': 'images/spades_6.svg', 'order': 31}, {'suit': 'spades', 'value': '7', 'filePath': 'images/spades_7.svg', 'order': 32}, {'suit': 'spades', 'value': '8', 'filePath': 'images/spades_8.svg', 'order': 33}, {'suit': 'spades', 'value': '9', 'filePath': 'images/spades_9.svg', 'order': 34}, {'suit': 'spades', 'value': '10', 'filePath': 'images/spades_10.svg', 'order': 35}, {'suit': 'spades', 'value': 'jack', 'filePath': 'images/spades_jack.svg', 'order': 36}, {'suit': 'spades', 'value': 'queen', 'filePath': 'images/spades_queen.svg', 'order': 37}, {'suit': 'spades', 'value': 'king', 'filePath': 'images/spades_king.svg', 'order': 38}, {'suit': 'spades', 'value': 'ace', 'filePath': 'images/spades_ace.svg', 'order': 39}, {'suit': 'hearts', 'value': '2', 'filePath': 'images/hearts_2.svg', 'order': 40}, {'suit': 'hearts', 'value': '3', 'filePath': 'images/hearts_3.svg', 'order': 41}, {'suit': 'hearts', 'value': '4', 'filePath': 'images/hearts_4.svg', 'order': 42}, {'suit': 'hearts', 'value': '5', 'filePath': 'images/hearts_5.svg', 'order': 43}, {'suit': 'hearts', 'value': '6', 'filePath': 'images/hearts_6.svg', 'order': 44}, {'suit': 'hearts', 'value': '7', 'filePath': 'images/hearts_7.svg', 'order': 45}, {'suit': 'hearts', 'value': '8', 'filePath': 'images/hearts_8.svg', 'order': 46}, {'suit': 'hearts', 'value': '9', 'filePath': 'images/hearts_9.svg', 'order': 47}, {'suit': 'hearts', 'value': '10', 'filePath': 'images/hearts_10.svg', 'order': 48}, {'suit': 'hearts', 'value': 'jack', 'filePath': 'images/hearts_jack.svg', 'order': 49}, {'suit': 'hearts', 'value': 'queen', 'filePath': 'images/hearts_queen.svg', 'order': 50}, {'suit': 'hearts', 'value': 'king', 'filePath': 'images/hearts_king.svg', 'order': 51}, {'suit': 'hearts', 'value': 'ace', 'filePath': 'images/hearts_ace.svg', 'order': 52}]
let numberOfPlayers = 4;

/**
 * 
 * @param {Array} deck - An array of all cards in the deck
 * @param {Number} numberOfHands - Number of hands to split the deck into
 * @returns {Array} Array of arrays (hands)
 */
function initializeHands(deck, numberOfHands) {
	// Create a deep copy of the deck to edit
	let tempDeck = [...deck]

	// Initialize the empty hands
	let hands = []
	for (let i = 0; i < numberOfHands; i++) {
		hands.push([])
	}

	// Populate the hands
	for (let i = 0; i < deck.length; i++) {
		const number = Math.floor(tempDeck.length * Math.random())
		hands[i % numberOfHands].push(tempDeck[number])
		tempDeck.splice(number, 1)
	}

	// Return the hands
	return hands
}

function createCard(card) {
	// Create the card elements (image inside a div)
	let cardElement = document.createElement('div')
	let img = document.createElement('img')
	img.src = card['filePath']

	// Append the image to the div
	cardElement.appendChild(img)

	// Return the card
	return cardElement
}

function sortHand(hand) {
	hand.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
}

let hands = initializeHands(deck, numberOfPlayers)
let domHands = document.querySelectorAll('[id^="hand"]')

for (let i = 0; i < hands.length; i++) {
	for (let j = 0; j < hands[i].length; j++) {
		sortHand(hands[i])
		let card = createCard(hands[i][j])
		domHands[i].appendChild(card)
	}
}