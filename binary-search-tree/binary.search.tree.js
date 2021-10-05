class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // a method to insert node at the right position
    insert(val) {
        const newNode = new Node(val)

        if(!this.root) {
            this.root = newNode
            return this
        }

        let currentNode = this.root

        while(true) {
            if(val === currentNode.val) {
                return undefined
            }

            if(val < currentNode.val) {
                if(currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    currentNode.left = newNode
                    return this
                }
            } else if(val > currentNode.val) {
                if(currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = newNode
                    return this
                }
            }
        }
    }

    // method to return a specific node by value
    find(val) {
        if(!this.root) {
            return undefined
        }

        let currentNode = this.root
        let found = false

        while(!found && currentNode) {
            if(val < currentNode.val) {
                currentNode = currentNode.left
            } else if(val > currentNode.val) {
                currentNode = currentNode.right
            } else {
                found = true
            }
        }

        return currentNode
    }

    // method to return if the tree contains a value or not
    contains(val) {
        if(!this.root) {
            return false
        }

        let currentNode = this.root
        let found = false

        while(!found && currentNode) {
            if(val < currentNode.val) {
                currentNode = currentNode.left
            } else if(val > currentNode.val) {
                currentNode = currentNode.right
            } else {
                found = true
            }
        }

        return found
    }
}