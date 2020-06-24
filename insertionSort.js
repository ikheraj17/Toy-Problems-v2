var insertionSort = arr => {
    //iterate over input starting at 2nd value
    for(var i = 1; i < arr.length; i ++) {
        //set alias for current value in loop = 8
        let current = arr[i];
        //set alias for comparison index = 1
        let toCompare = i;
        //while toCompare is greater than 0 and while the current value is less than its predecessor
        while(toCompare && current < arr[toCompare - 1]) {
            //arr[1] = arr[0] = 9
            arr[toCompare] = arr[toCompare - 1];
            //decrement our toCompare --> now to Compare = 0
            toCompare -= 1;
        }
        //finish the swap, setting the lesser value in the switch to the current
        arr[toCompare] = current;
    }
    return arr;
}

console.log(insertionSort([9,8,5,3,2,1]));