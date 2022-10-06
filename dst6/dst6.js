const Stack = require('stack-lifo');

// reverseString -funktio tekee merkkijonosta käänteisen (esim. 'myymälä' => 'älämyym')
function reverseString(str) {
  // Luo uuden pinon
  const s = new Stack();
  let rstr = '';

  for (let i = 0; i < str.length; ++i) {
    // .push() -metodi työntää uuden alkion pinon päällimäiseksi
    s.push(str[i]);
  }

  // .size() -metodi palauttaa pinon alkioiden määrän
  while (s.size() > 0) {
    // .pop() -metodi poistaa pinon päällimmäisen alkion
    rstr += s.pop();
  }

  return rstr;
}

// Palauttaa true mikäli sana on sama käänteisenä, muuten false
function isPalindrome(str) {
  // Poistaa merkkijonon tyhjät välit
  str = str.replace(/ /g, '');

  if (str === reverseString(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(reverseString('myymälä'));
console.log(isPalindrome('myymälä'));
console.log(isPalindrome('hannah'));

module.exports = {reverseString, isPalindrome};