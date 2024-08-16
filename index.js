// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, gift) {
  let messages = [];

  names.forEach(name => {
    let message = `Thank you, ${name}, for the wonderful ${gift} gift!`;
    messages.push(message);
  });

  return messages;
}
function countDown(number) {
    if (typeof number !== 'number' || number <= 0) {
      throw new Error('Invalid input. Please provide a positive integer greater than zero.');
    }
  
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }