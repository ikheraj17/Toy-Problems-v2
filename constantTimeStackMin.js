/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  
 * All of the functions in the Stack should run in constant time!
 *
 var example = new Stack()
  example.push(4)
  example.push(3)
  example.min() === 3
  example.push(3)
  example.push(2)
  example.push(2)
  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
     this._storage = [];
     this._mins = [];
 }

    // add an item to the top of the stack
Stack.prototype.push = function(value) {
    //push value into storage
    this._storage.push(value);
    //if minz has no items or if the new value is less than or equal to the current minimum saved in storage
    if(this._mins.length === 0 || value <= this._mins[this._mins.length -1]) {
        this._mins.push(value);
    }
};
  
    // remove an item from the top of the stack
Stack.prototype.pop = function() {
    //set alias for popped
    let popped = this._storage.pop();
    //if the popped item is = to the current min
    if(popped === this._mins[this._mins.length - 1]) {
        this._mins.pop();
    }
    //return the popped value from storage
    return popped;
};
  
    // return the number of items in the stack
Stack.prototype.size = function() {
    return this._storage.length;
};
    
    // return the minimum value in the stack
Stack.prototype.min = function() {
    return this._mins[this._mins.length -1];
};

var example = new Stack();
example.push(4);
example.push(3)
example.min() === 3
example.push(3)
example.push(2)
example.push(2)
example.min() === 2

console.log(example);
