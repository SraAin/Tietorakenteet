const coderA = new Set(['JS', 'PHP', 'C#', 'Python']);
const coderB = new Set(['JS', 'Java', 'C++', 'Python']);
const coderC = new Set(['JS', 'Java', 'Perl', 'Ruby']);

const coders = [coderA, coderB, coderC];

/*union -funktio luo uuden setin, joka koostuu coderA, coderB jne... -settien arvoista. Vaikka edellä
 mainittujen settien arvoissa on toistoa, ei sama arvo toistu uudessa unionSet -setissä*/
function union(coders) {
  const unionSet = new Set();

  // Käydään coders -taulukko läpi foreach -metodilla
  coders.forEach((s) => {
    for (const elem of s) {
      unionSet.add(elem);
    }
  });

  return unionSet;
}

// haveCodeSkill -funktio tarkistaa, että sisältääkö coders-taulukon setit tietyn ohjelmointikielen
function haveCodeSkill(coders, language) {
  if (union(coders).has(language)) {
    return true;
  } else {
    return false;
  }
}

console.log(union(coders));
console.log(haveCodeSkill(union(coders), 'Go'));
console.log(haveCodeSkill(coders, 'JS'));

module.exports = { union, haveCodeSkill };
