let a = 'aabc';

let allAnagrams = input => {
  //results arr
  let results = {};
  //recursive function
  let findCombos = (text, options) => {
    //base case
    if(text.length === input.length) {
      results[text] = true;
    }
    //iterate over options
    for(var i = 0; i < options.length; i++) {
      //run function recursively on options[i] added to text
      //but skip the current value at i for the next function call
      findCombos(text + options[i], options.slice(0,i) + options.slice(i+1));
    }
  }
  findCombos('', input);
  return Object.keys(results);
}

allAnagrams(a);