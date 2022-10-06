const Graph = require('graph-data-structure');

const values = [
  ['a', 'b', 7],
  ['a', 'c', 9],
  ['a', 'f', 14],
  ['b', 'c', 10],
  ['b', 'd', 15],
  ['c', 'd', 11],
  ['c', 'f', 2],
  ['d', 'e', 6],
  ['f', 'e', 9],
];

// Luodaan kaksiulotteisesta taulukosta verkko ja palautetaan se
function createGraph(values) {
  const g = new Graph();

  values.forEach((elem) => {
    // Hajotetaan elem-muuttujassa oleva taulukko, jotta addEdge voi ottaa alkiot argumenteikseen
    g.addEdge(...elem);
  });

  return g;
}

// Palautetaan lyhin polku ja sen paino
function shortestDist(graph, x, y) {
  const shortestpath = graph.shortestPath(x, y);

  return shortestpath.weight;
}

const newgraph = createGraph(values);
console.log(newgraph.serialize());

// a-node on lajittelussa ensimmäisenä, koska sillä ei ole saapuvia kaaria (edge)
// b-node on seuraava, koska ilman a-nodea sillä ei ole saapuvia kaaria
// Tilanne on sama c-nodessa kuin b-nodessakin. a- ja b-noden poistuttua c-nodella ei ole saapuvia kaaria
// f-node on ennen d-nodea, koska f-node on lukusuunnassa vasemmalla
// e-node on järjestyksessä viimeinen, koska sillä ei ole yhtään lähteviä kaaria
console.log(newgraph.topologicalSort());

console.log(shortestDist(newgraph, 'a', 'e'));

module.exports = { createGraph, shortestDist };
