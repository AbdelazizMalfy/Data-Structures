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

    // method to traverse the tree in horizontal way
    breadthFirstSearch() {
        const data = []
        const queue = [] // <= temp data holder with first in first out
        let currentNode = this.root

        queue.push(currentNode)

        while(queue.length) {
            currentNode = queue.shift()
            data.push(currentNode)
            if(currentNode.left) {
                queue.push(currentNode.left)
            }

            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return data
    }

    // method to traverse the tree in vertical way (preorder)
    preOrderDepthFirstSearch() {
        const data = []
        let currentNode = this.root

        const traverse = (currentNode) => {
            data.push(currentNode.val)

            if(currentNode.left) {
                traverse(currentNode.left)
            }

            if(currentNode.right) {
                traverse(currentNode.right)
            }
        }

        traverse(currentNode)

        return data
    }


    // method to traverse the tree in vertical way (postorder)
    postOrderDepthFirstSearch(){
        const data = []
        let currentNode = this.root

        const traverse = (currentNode) => {
            if(currentNode.left) {
                traverse(currentNode.left)
            }

            if(currentNode.right) {
                traverse(currentNode.right)
            }

            data.push(currentNode.val)
        }

        traverse(currentNode)

        return data
    }

    // method to traverse the tree in vertical way (inorder)
    inOrderDepthFirstSearch(){
        const data = []
        let currentNode = this.root

        const traverse = (currentNode) => {
            if(currentNode.left) {
                traverse(currentNode.left)
            }

            data.push(currentNode.val)

            if(currentNode.right) {
                traverse(currentNode.right)
            }
        }

        traverse(currentNode)

        return data
    }
}