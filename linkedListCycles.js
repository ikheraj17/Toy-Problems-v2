var Node = value => {
    return {value: value, next: null};
}

var hasCycle = head => {
    let p = head;
    let q = head;
    while(p && q && q.next) {
        p = p.next;
        q = q.next.next;
        if( p === q) {
            return true;
        }
    }
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