const Queue = require('queue-fifo');

// Luodaan uusi jono-olio ja syötetään siihen alkiot taulukosta
function makeQueue(arr) {
  const myqueue = new Queue();

  arr.forEach((elem) => {
    // .enqueue(elem) lisää uuden alkion myqueue-jonon loppuun
    myqueue.enqueue(elem);
  });
  return myqueue;
}

/*checkQueue -funktiossa tehdään while(true)-if-break -silmukka, josta hypätään ulos, kun alkion
arvo on >= stopper ja palautetaan jäljelle jäänyt jono, jonka kärjessä on jonon suurin alkio*/
function checkQueue(myqueue, stopper) {
  // .peek() -metodi palauttaa jonon ensimmäisen alkion arvon muuttamatta jonoa
  while (myqueue.peek() < stopper) {
    // .dequeue() -metodi poistaa yhden alkion jonon alkupäästä
    myqueue.dequeue();
    if (myqueue.peek() >= stopper) {
      break;
    }
  }
  return myqueue;
}

// Lisää kaikki jonon alkiot taulukkoon ja tyhjentää jonon
function clearQueue(queue) {
  const newarr = [];

  // .size() -metodi palauttaa jonon alkioiden määrän
  while (queue.size() > 0) {
    newarr.push(queue.peek());
    queue.dequeue();
  }

  return newarr;
}

const arr = [3, 5, 1, 15, 4, 2, 8, 4];

const newq = makeQueue(arr);
console.log(newq);
const newq2 = checkQueue(newq, 10);
console.log(newq2);
const newarr = clearQueue(newq);
console.log(newarr);

module.exports = { makeQueue, checkQueue, clearQueue };
