  Minimum exercise
function min(a, b) {
  if (a < b) {
    return a;
  }
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

  Recursion exercise

  if (x < 0) {
    x = -x }
  if (x == 0) {
      return true;}
  else if (x == 1) {
    return false;}
  else if ((x % 2) == 0) {
    return true;}
  else if ((x % 2) == 1) {
    return false; }
}

Bean Counting Exercise

function countBs(str) {
  var count = 0;
  var xArr = [];
  xArr = str.split("");
  for (var i = 0; i < xArr.length; i++) {
    if (xArr[i] == "B") {
      count++;
    }
  }
  return count;
}
function countChar(a, b) {
  var count = 0;
  var arr = [];
  arr = a.split("");
  for (var i=0; i < arr.length; i++) {
    if (arr[i] == b) {
      count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4