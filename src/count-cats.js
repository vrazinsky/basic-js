module.exports = function countCats(arr) {
  if (!Array.isArray(arr))
    return 0;
  var sum = 0;
  arr.forEach(line => {
    line.forEach(el => {
      if (el === '^^')
        sum++;
    })
  })
  return sum;
};
