function setScore(scores, newscore) {
  scores.push(newscore);
}

function getScores(scores) {
  return scores;
}

function latest(scores) {
  return scores[scores.length - 1];
}

function highest(scores) {
  return Math.max(...scores);
}

function topThree(scores) {
  const scoreclone = [...scores];
  scoreclone.sort(function comparefunction(a, b) {
    return a > b ? -1 : 0;
  });
  return scoreclone.slice(0, 3);
}

const scores = [44, 12, 33];

setScore(scores, 21);
setScore(scores, 50);

console.log('Tikanheiton tulokset ovat ' + getScores(scores));
console.log('Viimeisin tulos on ' + latest(scores));
console.log('Paras tulos on ' + highest(scores));
console.log('Kolme parasta tulosta ovat ' + topThree(scores));

module.exports = { setScore, getScores, latest, highest, topThree };
