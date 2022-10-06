// Keko (heap) on tietorakenne, mikä on muunnos prioriteettijonosta
// (priority queue) ja binääripuusta (binary tree)

// Kekoa voidaan hyödyntää tapauksissa, joissa halutaan löytää
// taulukon pienin tai suurin alkio

const { Heap } = require('heap-js');

const values = [9, 4, 7];

// Luo keon pienimmästä suurimpaan
function createMinHeap(values) {
  const heap = new Heap();

  heap.init(values);

  return heap;
}

// Luo keon suurimmasta pienimpään
function createMaxHeap(values) {
  const heap = new Heap(Heap.maxComparator);

  heap.init(values);

  return heap;
}

const minheap = createMinHeap(values);
console.log(minheap);

// peek()-metodi näyttää keon pienimmän alkion
console.log(minheap.peek());

minheap.push(1);
console.log(minheap.peek());

const maxheap = createMaxHeap(values);
console.log(maxheap.peek());
