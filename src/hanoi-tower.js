module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var n = Math.pow(2,disksNumber)-1;
  return {turns: n, seconds: (n/(turnsSpeed/3600))}
}