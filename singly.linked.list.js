class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }

    setVal(val) {
        this.val = val
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
    }

    push(val) {
        let newNode = new ListNode(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        if (this.length === 0) {
            return undefined
        }

        let removedNode = new ListNode()
        removedNode.setVal(this.tail.val)

        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
            return removedNode
        }

        let current = this.head

        while(current) {
            if (current.next === this.tail) {
                this.tail = null
                this.tail = current
                this.tail.next = null
                this.length--
                return removedNode
            }
            current = current.next
        }
    }
}