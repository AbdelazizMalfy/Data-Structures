class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }

    setVal(val) {
        this.val = val
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
}