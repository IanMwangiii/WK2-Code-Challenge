function generateArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  console.log(generateArray(4, 7)); // [4, 5, 6, 7]
  console.log(generateArray(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]