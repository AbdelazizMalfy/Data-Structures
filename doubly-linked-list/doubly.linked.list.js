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
 }