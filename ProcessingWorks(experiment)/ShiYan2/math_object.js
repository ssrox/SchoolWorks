const myMath = {
  PI: 3.14159,
  max: function(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
    }
    return maxVal;
  }
};

const numbers = [5, 12, 8, 21, 3];
console.log(myMath.PI);
console.log(myMath.max(numbers));