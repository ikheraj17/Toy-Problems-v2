// const rpsPerms = roundCount => {
//     if(roundCount === 0) {
//         return [];
//     }
//     const permutations = [];
//     function playRound(plays) {
//         if(plays.length === roundCount) {
//             permutations.push(plays);
//             return;
//         }
//       const options = ['r','p','s'];
//       for(var i = 0; i < options.length; i ++) {
//           playRound(plays + options[i]);
//       }

//     }
//     playRound('');
//     return permutations;
// }

//console.log(rpsPerms(2));

const rpsPerms = rounds => {
//if there are 0 rounds
//return an empty array
if(rounds === 0) return [];


//create a result array for all permutations
const results = [];

//create recursive function that takes in the parameter of a playString --> "rpr"
function findCombos(playStr) {
//base case for recursion that if the length of plays 
//string is === to the number of rounds
if(playStr.length === rounds) {
    results.push(playStr);
    return;
}
//push that string into our results array

//non-base case

//create options array with [r,p,s]
const options = ['r','p','s'];
//iterate over options arr
for(var i = 0; i < options.length; i ++) {
    findCombos(playStr + options[i]);
}
//run our recursive function on (play + options[i])
//note that the above will add whatever chars to the play string
} 


//end of function declaration

//run our recursive function on an empty string
findCombos('');
//return our results array
return results;
}

console.log(rpsPerms(3));