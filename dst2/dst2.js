const xkauppamap = new Map([
  ['nimi', 'xkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 20],
  ['karvalakki', 5],
]);
const ykauppamap = new Map([
  ['nimi', 'ykauppa'],
  ['lumilapio', 5],
  ['potkukelkka', 20],
  ['karvalakki', 1],
]);
const zkauppamap = new Map([
  ['nimi', 'zkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 25],
  ['karvalakki', 15],
]);

// Lasketaan mapin tuotteiden kokonais summa
function sum(shop) {
  let sum = 0;

  for (const value of shop.values()) {
    if (typeof value === 'number') {
      sum += value;
    }
  }

  return sum;
}

// Palauttaa uuden mapin, jonka avain-arvo -pari on kauppa ja kaupan tuotteiden laskettu summa
// Map{'xkauppa' => 35 jne...}
function createSumMap(key, ...shops) {
  const summap = new Map();

  // Käydään kaikki ...shops -syntaksin (spread syntax) kautta saapuvat mapit läpi foreach -metodilla
  shops.forEach((value) => {
    const shopname = value.get(key);

    // Asetetaan summap -mapille avain-arvo pari
    summap.set(shopname, sum(value));
  });

  return summap;
}

// Palauttaa halvimman kaupan avain-arvo -parin
function minValueMap(mapX) {
  // Alustava luku asetetaan mahdollisimman suureksi
  let minvalue = Number.MAX_VALUE;
  let minvaluekey = '';

  // Käydään mapin avaimet ja arvot läpi
  mapX.forEach((value, key) => {
    if (typeof value === 'number' && value < minvalue) {
      minvalue = value;
      minvaluekey = key;
    }
  });

  const minmap = new Map();

  // Asetetaan avain-arvo -pari minmap -mappiin
  minmap.set(minvaluekey, minvalue);

  return minmap;
}

// createSumMap(key, ...shops) -funktion kutsu
const smap = createSumMap('nimi', xkauppamap, ykauppamap, zkauppamap);

console.log(sum(xkauppamap));
console.log(smap);
console.log(minValueMap(smap));

module.exports = { sum, createSumMap, minValueMap };
