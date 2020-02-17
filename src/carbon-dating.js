const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var k =  0.693 / HALF_LIFE_PERIOD;
  var n = parseFloat(sampleActivity);
 
  if (typeof sampleActivity !== "string") {
      return false; 
  }
  if (Number.isNaN(n)) {
      return false;
  }

  if (n > 15 || n <= 0) {
      return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/n)/k); 
};
