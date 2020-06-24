var Node = value => {
    return {value: value, next: null};
}

var hasCycle = head => {
    //create two copies of the list, starting with the head node
    let p = head;
    let q = head;
    //while both lists are not undefined or null, and while the faster traversasl has an existing 'next' value
    while(p && q && q.next) {
        //advance first list by 1 node
        p = p.next;
        //advance 2nd list by 2 nodes
        q = q.next.next;
        //if they eventually equal each other, there is a cycle in the list
        if( p === q) {
            return true;
        }
    }
    //if none of the above conditions hold, return false
    return false;
}

var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
console.log("Should be false: ",hasCycle(nodeA)); // => false
nodeE.next = nodeB;
console.log("Should be true: ", hasCycle(nodeA));