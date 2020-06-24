function bubbleSort(arr) {
    //alias for array length
    const len = arr.length;
    //set swaps = true
    var swaps = true;
    //while swaps is true
    while (swaps === true) {
      //set its value to false, so that if the if statement does not
      //hold, swaps stays false and the function ends
      swaps = false;
      //i needs to stop at the 2nd to last index for the i + 1 comparison to work
      for(var i =0; i < len -1; i ++){
        //if first value is > next value
        if(arr[i] > arr[i + 1]) {
          //set swaps to true
          swaps = true;
          //set a temp alias for the first value
          let temp = arr[i];
          //set the first value = to its compared value
          arr[i] = arr[i+1];
          //set the second value to the first value, stored in alias temp
          arr[i+1] = temp;
        }
      }
    }
    //return the array
    return arr;
  }
  
  
  console.log(bubbleSort([3,3,7,1,8,4,3,5]));