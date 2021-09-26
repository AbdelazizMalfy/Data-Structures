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

        if(this.length === 0) {
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
        if(this.length === 0) {
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
 }

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
console.log('list before popping', list)
list.pop()
console.log('list after popping', list)