function swapCase(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        result.push(str[i].toLowerCase());
      } else if (str[i] === str[i].toLowerCase()) {
        result.push(str[i].toUpperCase());
      } else {
        result.push(str[i]);
      }
    }
    return result.join('');
  }
  
  console.log(swapCase('The Quick Brown Fox')); // tHE qUICK bROWN fOX