const Node = require('bst-js');

const root = 10;
const values = [2, 6, 23, 1, 12, 21, 5];

// bst-puun luonti
function createTree(root, values) {
  const tree = new Node(root);
  tree.insert(...values);
  return tree;
}

const newtree = createTree(root, values);
console.log(newtree);

console.log('Depth-first:');
newtree.depthFirst(function () {
  console.log(this.value);
});

console.log('\n' + 'Breadth-first:');
newtree.breadthFirst(function () {
  console.log(this.value);
});

module.exports = { createTree };
