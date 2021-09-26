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
        this.length++
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

    // method to set an element at a specifc index
    set(index, val) {
        const current = this.get(index)

        if (current) {
            current.setVal(val)
            return true
        }

        return false
    }

    // method to insert a node at a specific index
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        }

        if (index === 0) {
            return !!this.unshift(val)
        }

        if (index === this.length) {
            return !!this.push(val)
        }

        const newNode = new ListNode(val)
        const prevNode = this.get(index - 1)
        newNode.next = prevNode.next
        prevNode.next = newNode
        this.length++
        return true
    }

    // method to remove a node at a specific index
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }

        if(index === 0) {
            return this.shift()
        }

        if(index === this.length - 1 ) {
            return this.pop()
        }
        
        const prevNode = this.get(index - 1)
        const removedNode = prevNode.next
        prevNode.next = prevNode.next.next
        this.length--
        return removedNode
    }

    // method to reverse a linked list
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prevNode = null
        let nextNode

        while(node) {
            nextNode = node.next
            node.next = prevNode
            prevNode = node
            node = nextNode
        }

        return this
    }

    // method to print all values of the linked list
    print() {
        let arr = []
        let current = this.head

        while(current) {
            arr.push(current.val)
            current = current.next
        }

        console.log(arr);
    }
}