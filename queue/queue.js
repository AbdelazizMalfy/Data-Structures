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


    // method to add to the end of the queue
    enqueue(val) {
        const newNode = new Node(val)

        if (this.length === 0) {
            this.first = newNode
        } else {
            this.last.next = newNode
        }

        this.last = newNode
        this.length++
        return this.length
    }

    // method to remove from the beginning of the queue
    dequeue(){
        if (this.length === 0) {
            return undefined
        }

        const removedNode = this.first

        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            removedNode.next = null
        }

        this.length--
        return removedNode
    }
}


const queue = new Queue()

console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log('before dequeuing', queue)
console.log(queue.dequeue())
console.log('after dequeuing', queue)