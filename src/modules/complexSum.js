const sum = function complexSum(a, b) {
  if (a + b > 21) {
    return 0;
  } else if (a || b === 11) {
    return (a || b != 11) + 1 ;
  } else {
    return a + b;
  }
};

console.log(sum(2, 11));
