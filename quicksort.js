//quicksort is yet another way to sort an array, picking a pivot point
//to use as you create sub arrays to the left and right of that point
//for numbers greater than or equal to (right) AND less than (left) the chosen pivot

const quickSort = arr => {
    //base case for array with length of 1
    if(arr.length <= 1) {
        return arr;
    }
    //create pivot
    const pivot = arr[Math.floor(arr.length/2)];
    //create left arr
    const left = [];
    //create right arr
    const right = [];
    //iterate over input arr
    for(var i =0 ; i < arr.length; i++) {
        //if i is the index of the pivot, skip this iteration
        if(i === Math.floor(arr.length / 2)) {
            continue;
        }
        //if current num is less than pivot, push to left
        if(arr[i] < pivot) left.push(arr[i]);
        //if current num is greater or equal to pivot, push to right
        if(arr[i] >= pivot) right.push(arr[i]);
    }
    //combine the left and right arrays with the pivot recursively until everything is sorted
    let sorted = quickSort(left).concat(pivot, quickSort(right));
    //return the sorted array
    return sorted;
}

console.log(quickSort([9,7,11,8,4,3,6]));