module.exports = function (input) {
  let split = input.length / 2;
  let firstHalf = input.slice(0, split);
  let secondHalf = input.slice(split, input.length).reverse();
  let schedule = [];

  for (let i=0; i < input.length - 1; i++) {
    let matchups = [];
    firstHalf.forEach(function(team1, i){
      secondHalf.forEach(function(team2, j) {
        if (i === j) {
          matchups.push([team1, team2]);
        }
      })
    })
    secondHalf.push(firstHalf.pop());
    let thing = secondHalf.shift();
    firstHalf.splice(1,0, thing);
    schedule.push(matchups);
  }
  return schedule;
}
