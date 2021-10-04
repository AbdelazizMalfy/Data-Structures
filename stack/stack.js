class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }

    setVal(val) {
        this.val = val
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    // method to add to the beginning of the stack
    push(val) {
        const newNode = new Node(val)

        if (this.length === 0) {
            this.last = newNode
        } else {
            newNode.next = this.first
        }

        this.first = newNode
        this.length++
        return this.length
    }

    // method to remove from the beginning of the stack
    pop() {
        if (this.length === 0) {
            return undefined
        }

        const removedNode = this.first

        if (this.length === 1) {
            this.last = null
        } 
        this.first = removedNode.next
        removedNode.next = null

        this.length--
        return removedNode
    }
}