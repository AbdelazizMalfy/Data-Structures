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

    // method to add to the end of the list
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

    // method to remove from the end of the list
    pop() {
        if (this.length === 0) {
            return undefined
        }

        let removedNode = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
            return removedNode
        }

        let current = this.head

        while(current) {
            if (current.next === this.tail) {
                this.tail = current
                this.tail.next = null
                this.length--
                return removedNode
            }
            current = current.next
        }
    }

    // method to remove from the beginning of the list
    shift() {
        if (this.length === 0) {
            return undefined
        }

        if (this.length === 1) {
            this.tail = null
        }

        let removedNode = this.head
        this.head = this.head.next
        this.length--
        return removedNode
    }

    // method to add to the beginning of the list
    unshift(val) {
        let newNode = new ListNode(val)

        if (this.length === 0) {
            this.tail = newNode
        } else {
            newNode.next = this.head
        }

        this.head = newNode
        this.length ++
        return this
    }

    // method to get an element at a specific index
    get(index) {
        if ( index < 0 || index >= this.length) {
            return undefined
        }

        let current = this.head

        for (let i = 0; i < index; i++) {
            current = current.next
        }

        return current
    }
}