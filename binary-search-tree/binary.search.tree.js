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

    breadthFirstSearch() {
        let data = []
        let queue = [] // <= temp data holder with first in first out
        let node = this.root

        queue.push(node)

        while(queue.length) {
            node = queue.shift()
            data.push(node)
            if(node.left) {
                queue.push(node.left)
            }

            if(node.right){
                queue.push(node.right)
            }
        }
        return data
    }
}

QUEUE:[10]
DATA: [10]

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)