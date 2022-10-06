class MySet {
  // Konstruktori ottaa vastaan taulukon
  constructor(arr) {
    arr = this.checkUnique(arr);

    if (arr) {
      this.arr = arr;
      this.size = arr.length;
    } else {
      this.arr = [];
      this.size = 0;
    }
  }

  // Tarkistaa, että taulukon alkiot ovat uniikkeja
  checkUnique(arr) {
    const uniquearr = [];

    arr.forEach((elem) => {
      if (uniquearr.indexOf(elem) < 0) {
        uniquearr.push(elem);
      }
    });

    return uniquearr;
  }

  // Lisää uuden alkion taulukkon, jos sitä ei siellä ennestään ole
  add(data) {
    if (this.arr.indexOf(data) < 0) {
      this.arr.push(data);
      this.size++;
      return true;
    } else {
      return false;
    }
  }

  // Poistaa alkion taulukosta, jos se on siellä
  remove(data) {
    if (this.arr.indexOf(data) >= 0) {
      this.arr.splice(this.arr.indexOf(data), 1);
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  // Tarkistaa onko alkiota taulukossa
  has(data) {
    if (this.arr.indexOf(data) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  // union -metodi ottaa vastaan kaksi tai useampia settejä ja lisää ne yhdeksi setiksi
  union(setA, ...sets) {
    const u = setA;

    sets.forEach((elem) => {
      const s = elem;
      s.arr.forEach((elem) => {
        if (u.arr.indexOf(elem) < 0) {
          u.arr.push(elem);
          this.size++;
        }
      });
    });

    return u;
  }
}

const arr1 = [1, 2, 4];

const mySet = new MySet(arr1);
const mySet1 = new MySet([3, 4, 8, 9]);
const mySet2 = new MySet([3, 5, 7, 10]);

mySet.add(6);
mySet.remove(1);
console.log(mySet.has(4));
console.log(mySet);
console.log(mySet.union(mySet, mySet1, mySet2));

module.exports = MySet;
