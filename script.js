const suits = ["♠", "♥", "♦", "♣"];
const ranks = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let deck = [];

function createDeck() {
    deck = [];

    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({
                suit: suit,
                rank: rank
            });
        }
    }
}

createDeck();

console.log(deck);
