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

    // method to add to the beginning of the list
    push(val) {
        const newNode = new Node(val)

        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            const current = this.first
            this.first = newNode
            newNode.next = current
        }

        this.length++
        return this.length
    }
}

const stack = new Stack()

console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack)