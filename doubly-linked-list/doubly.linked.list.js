 class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }

    setVal(val) {
        this.val = val
    }
 }

 class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // method to add to the end of the list
    push(val) {
        let newNode = new ListNode(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
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
        } else {
            this.tail = removedNode.prev
            this.tail.next = null
            removedNode.prev = null
        }

        this.length--
        return removedNode
    }

    // method to remove from the beginning of the list
    shift() {
        if(this.length === 0) {
            return undefined
        }

        let removedNode = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = removedNode.next
            this.head.prev = null
            removedNode.next = null
        }

        this.length--
        return removedNode
    }

    // method to add to the beginning of the list
    unshift(val){
        let newNode = new ListNode(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    // method to get an element at a specific index
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }

        if (this.length === 1) {
            return this.head
        }

        if (index === this.length - 1) {
            return this.tail
        }

        const middle = (this.length - 1) / 2
        let current

        if (index <= middle) {
            current = this.head
            for (let i = 0; i < index ; i++) {
                current = current.next
            }
        } else {
            current = this.tail
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev
            }
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
        const prev = this.get(index - 1)
        const next = prev.next

        newNode.prev = prev
        newNode.next = next
        next.prev = newNode
        prev.next = newNode
        this.length++
        return true
    }

    // method to remove a node at a specific index
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }

        if (index === 0) {
            return this.shift()
        }

        if (index === this.length - 1) {
            return this.pop()
        }

        const removedNode = this.get(index)
        const prev = removedNode.prev
        const next = removedNode.next

        prev.next = next
        next.prev = prev

        removedNode.next = null
        removedNode.prev = null

        this.length--
        return removedNode
    }
}