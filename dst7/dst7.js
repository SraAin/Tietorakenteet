/* eslint-disable new-cap */

const L = require('simple-double-linked-list');

const track1 = 'Frederik - Titanic';
const track2 = 'Irwin Goodman - Viuhahdus';
const track3 = 'Juice Leskinen - Jyrki boy';
const track4 = 'Matti ja Teppo - Mä joka päivä töitä teen';
const track5 = 'Jamppa Tuominen - Aamu toi, ilta vei';

const arr = [track1, track2, track3, track4];

// Luodaan lista taulukon alkioista
function listFromArray(arr) {
  const list = new L.List();

  arr.forEach((elem) => {
    // Lisää taulukon alkion listaan
    list.AddFront(elem);
  });

  return list;
}

// Tulostaa listan alkiot allekkain
function print(list) {
  for (const item = list.Begin(); !item.IsAtEnd(); item.Next()) {
    console.log(item.Value());
  }
  console.log('\n');
}

// Tulostaa listan alkiot allekkain käänteisessä järjestyksessä
function printReverse(list) {
  for (const item = list.End(); !item.IsAtEnd(); item.Previous()) {
    console.log(item.Value());
  }
  console.log('\n');
}

// Lisätään uusi alkio listaan numeroidulle paikalle. Tehdään listaan omat indeksit numerointia varten
function insertToIndex(list, index, item) {
  // Uutta nodea ei voi lisätä listan ulkopuolelle
  if (index < 0 || index > list.size) {
    return false;
  }
  // Iteraattori listan alkuun
  const iterator = list.Begin();

  // Iteraattori siirretään indeksiä edeltävään paikkaan InsertAfter-metodia varten
  for (let i = 0; i < index - 1; i++) {
    // Iteraattori siirtyy niin kauan kunnes tullaan indeksiä edeltävään nodeen
    iterator.Next();
  }

  // InsertAfter()-metodi lisää uuden noden iteraattorin jälkeen
  list.InsertAfter(item, iterator);

  return true;
}

// Poistetaan alkio listasta
function removeFromIndex(list, index) {
  // Varmistaa, että poistoa ei voida tehdä listan ulkopuolella
  if (index < 0 || index > list.size) {
    return false;
  }
  // Asetetaan iteraattori listan alkuun
  const iterator = list.Begin();

  // Siirrytään poisto paikkaan listassa
  for (let i = 0; i < index; i++) {
    iterator.Next();
  }
  // Remove()-metodilla poistetaan node siitä paikasta missä iteraattori on
  list.Remove(iterator);

  return true;
}

const newlist = listFromArray(arr);
// console.log(newlist);

print(newlist);
printReverse(newlist);

insertToIndex(newlist, 2, track5);
print(newlist);

removeFromIndex(newlist, 1);
print(newlist);

module.exports = {
  listFromArray,
  print,
  printReverse,
  insertToIndex,
  removeFromIndex,
};
