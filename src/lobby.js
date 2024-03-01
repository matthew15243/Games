import app from './_firebase.js'
import './_auth.js'
import { getFirestore, addDoc, getCountFromServer, collection, query, where, onSnapshot, doc, getDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const db = getFirestore(app);
let auth = getAuth(app)

// Get the current user
let userEmail
onAuthStateChanged(auth, clientUser => {
	userEmail = clientUser.email
})

let standardDeck = [{'suit': 'clubs', 'value': '2', 'filePath': 'images/clubs_2.svg', 'order': 1}, {'suit': 'clubs', 'value': '3', 'filePath': 'images/clubs_3.svg', 'order': 2}, {'suit': 'clubs', 'value': '4', 'filePath': 'images/clubs_4.svg', 'order': 3}, {'suit': 'clubs', 'value': '5', 'filePath': 'images/clubs_5.svg', 'order': 4}, {'suit': 'clubs', 'value': '6', 'filePath': 'images/clubs_6.svg', 'order': 5}, {'suit': 'clubs', 'value': '7', 'filePath': 'images/clubs_7.svg', 'order': 6}, {'suit': 'clubs', 'value': '8', 'filePath': 'images/clubs_8.svg', 'order': 7}, {'suit': 'clubs', 'value': '9', 'filePath': 'images/clubs_9.svg', 'order': 8}, {'suit': 'clubs', 'value': '10', 'filePath': 'images/clubs_10.svg', 'order': 9}, {'suit': 'clubs', 'value': 'jack', 'filePath': 'images/clubs_jack.svg', 'order': 10}, {'suit': 'clubs', 'value': 'queen', 'filePath': 'images/clubs_queen.svg', 'order': 11}, {'suit': 'clubs', 'value': 'king', 'filePath': 'images/clubs_king.svg', 'order': 12}, {'suit': 'clubs', 'value': 'ace', 'filePath': 'images/clubs_ace.svg', 'order': 13}, {'suit': 'diamonds', 'value': '2', 'filePath': 'images/diamonds_2.svg', 'order': 14}, {'suit': 'diamonds', 'value': '3', 'filePath': 'images/diamonds_3.svg', 'order': 15}, {'suit': 'diamonds', 'value': '4', 'filePath': 'images/diamonds_4.svg', 'order': 16}, {'suit': 'diamonds', 'value': '5', 'filePath': 'images/diamonds_5.svg', 'order': 17}, {'suit': 'diamonds', 'value': '6', 'filePath': 'images/diamonds_6.svg', 'order': 18}, {'suit': 'diamonds', 'value': '7', 'filePath': 'images/diamonds_7.svg', 'order': 19}, {'suit': 'diamonds', 'value': '8', 'filePath': 'images/diamonds_8.svg', 'order': 20}, {'suit': 'diamonds', 'value': '9', 'filePath': 'images/diamonds_9.svg', 'order': 21}, {'suit': 'diamonds', 'value': '10', 'filePath': 'images/diamonds_10.svg', 'order': 22}, {'suit': 'diamonds', 'value': 'jack', 'filePath': 'images/diamonds_jack.svg', 'order': 23}, {'suit': 'diamonds', 'value': 'queen', 'filePath': 'images/diamonds_queen.svg', 'order': 24}, {'suit': 'diamonds', 'value': 'king', 'filePath': 'images/diamonds_king.svg', 'order': 25}, {'suit': 'diamonds', 'value': 'ace', 'filePath': 'images/diamonds_ace.svg', 'order': 26}, {'suit': 'spades', 'value': '2', 'filePath': 'images/spades_2.svg', 'order': 27}, {'suit': 'spades', 'value': '3', 'filePath': 'images/spades_3.svg', 'order': 28}, {'suit': 'spades', 'value': '4', 'filePath': 'images/spades_4.svg', 'order': 29}, {'suit': 'spades', 'value': '5', 'filePath': 'images/spades_5.svg', 'order': 30}, {'suit': 'spades', 'value': '6', 'filePath': 'images/spades_6.svg', 'order': 31}, {'suit': 'spades', 'value': '7', 'filePath': 'images/spades_7.svg', 'order': 32}, {'suit': 'spades', 'value': '8', 'filePath': 'images/spades_8.svg', 'order': 33}, {'suit': 'spades', 'value': '9', 'filePath': 'images/spades_9.svg', 'order': 34}, {'suit': 'spades', 'value': '10', 'filePath': 'images/spades_10.svg', 'order': 35}, {'suit': 'spades', 'value': 'jack', 'filePath': 'images/spades_jack.svg', 'order': 36}, {'suit': 'spades', 'value': 'queen', 'filePath': 'images/spades_queen.svg', 'order': 37}, {'suit': 'spades', 'value': 'king', 'filePath': 'images/spades_king.svg', 'order': 38}, {'suit': 'spades', 'value': 'ace', 'filePath': 'images/spades_ace.svg', 'order': 39}, {'suit': 'hearts', 'value': '2', 'filePath': 'images/hearts_2.svg', 'order': 40}, {'suit': 'hearts', 'value': '3', 'filePath': 'images/hearts_3.svg', 'order': 41}, {'suit': 'hearts', 'value': '4', 'filePath': 'images/hearts_4.svg', 'order': 42}, {'suit': 'hearts', 'value': '5', 'filePath': 'images/hearts_5.svg', 'order': 43}, {'suit': 'hearts', 'value': '6', 'filePath': 'images/hearts_6.svg', 'order': 44}, {'suit': 'hearts', 'value': '7', 'filePath': 'images/hearts_7.svg', 'order': 45}, {'suit': 'hearts', 'value': '8', 'filePath': 'images/hearts_8.svg', 'order': 46}, {'suit': 'hearts', 'value': '9', 'filePath': 'images/hearts_9.svg', 'order': 47}, {'suit': 'hearts', 'value': '10', 'filePath': 'images/hearts_10.svg', 'order': 48}, {'suit': 'hearts', 'value': 'jack', 'filePath': 'images/hearts_jack.svg', 'order': 49}, {'suit': 'hearts', 'value': 'queen', 'filePath': 'images/hearts_queen.svg', 'order': 50}, {'suit': 'hearts', 'value': 'king', 'filePath': 'images/hearts_king.svg', 'order': 51}, {'suit': 'hearts', 'value': 'ace', 'filePath': 'images/hearts_ace.svg', 'order': 52}]

/*
HEARTS
*/
async function initializeHearts() {
	let hands = initializeHands(standardDeck, 4)

	const player1 = userEmail
	const player2 = 'Scott'
	const player3 = 'Heidi'
	const player4 = 'Ryan'

	// Create the document
	const gameData = {
		  'name p1' : player1
		, 'name p2' : player2
		, 'name p3' : player3
		, 'name p4' : player4
		, 'players' : [player1, player2, player3, player4]
		, 'hand p1' : hands[0]
		, 'hand p2' : hands[1]
		, 'hand p3' : hands[2]
		, 'hand p4' : hands[3]
		, 'played card p1' : null
		, 'played card p2' : null
		, 'played card p3' : null
		, 'played card p4' : null
		, 'score p1' : 0
		, 'score p2' : 0
		, 'score p3' : 0
		, 'score p4' : 0
		, 'round points p1' : 0
		, 'round points p2' : 0
		, 'round points p3' : 0
		, 'round points p4' : 0
	}

	const docRef = await addDoc(collection(db, "Hearts"), gameData)

	// Change to the hearts page
	window.location.href='./hearts.html';

}

/**
 * 
 * @param {Array} deck - An array of all cards in the deck
 * @param {Number} numberOfHands - Number of hands to split the deck into
 * @returns {Array} Array of arrays (hands)
 */
function initializeHands(deck, numberOfHands, numCards = Infinity) {
	// Create a deep copy of the deck to edit
	let tempDeck = [...deck]

	// Initialize the empty hands
	let hands = []
	for (let i = 0; i < numberOfHands; i++) {
		hands.push([])
	}

	// Populate the hands
	for (let i = 0; i < Math.min(deck.length, numCards * numberOfHands); i++) {
		const number = Math.floor(tempDeck.length * Math.random())
		hands[i % numberOfHands].push(tempDeck[number])
		tempDeck.splice(number, 1)
	}

	// Return the hands
	return hands
}

function removeChildren(element) {
	while(element.firstChild) {
		element.removeChild(element.lastChild)
	}
}

window.selectGame = async (game) => {
	// Remove the 'active' class from all buttons
	document.querySelectorAll('button.active').forEach((ele) => {ele.classList.remove('active')})

	// Listen to the game
	const ref = doc(db, "Games", game)
	const listen = onSnapshot(ref, (doc) => {
		// Empty the active players div
		let activePlayersDiv = document.getElementById('activePlayers')
		removeChildren(activePlayersDiv)

		// Add in the current players
		try {
			const players = doc.data()['players']
			for (let i = 0; i < players.length; i++) {
				const element = document.createElement('div')
				element.innerHTML = players[i]
				activePlayersDiv.appendChild(element)
			}
		}
		catch {
			console.log(`${game} not found`)
		}
	})

	// Add 'active' to the selected game
	document.getElementById(game).classList.add('active')
}

window.joinGame = async () => {
	const game = document.getElementsByClassName('active')[0].id
	switch (game) {
		case 'hearts':
			const q = query(collection(db, "Hearts"), where('players', 'array-contains', userEmail))
			const documentCount = await getCountFromServer(q)

			// Check to see if the user is in the middle of a game already
			if (documentCount == 0) {
				// Check to see if any players are in the hearts lobby
				const q = query(collection(db, "Hearts"), where('players', 'array-contains', userEmail))
				const documentCount = await getCountFromServer(q)
				const docRef = await addDoc(collection(db, "Games"), gameData)
			}

			/*const docs = await getDocs(q)
			documentCount = await getCountFromServer(q)
			docs.forEach((doc) => {
				console.log(doc.data())
			})*/

			// initializeHearts()
			break;
		default:
			console.log(`${game} not found`)
	}
}