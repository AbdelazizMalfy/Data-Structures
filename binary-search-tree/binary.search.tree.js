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
}

const tree = new BinarySearchTree();

tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

console.log(tree)