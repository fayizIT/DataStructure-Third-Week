class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        var newNode=new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this;
        }else{
            var current=this.root;
            while(true){
                if(value==current.value) return undefined;
                if(value<current.value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }else{
                        current=current.left
                    }
                }else if(value>current.value){
                    if(current.right===null){
                        current.right=newNode;
                        return this;
                    }else{
                        current=current.right;
                    }
                }
            }
        }
    }


    //Searching

    find(value){
        
        if(!this.root){
            console.log("empty tree");
            return false;
        }
        let current = this.root;
        while(current!=null){
            if(current.value === value){
                return current
            }else if(value<current.value){
                current = current.left
            }else{
                current = current.right;
            }
        }
        return false;
    }

    //deletion
    delete(value){
        function findMinNode(node) {
            while (node.left !== null) {
                node = node.left;
            }
            return node;
        }

        function deleteNode(node, value) {
            if (node === null) {
                return null;
            }
            if (value === node.value) {
                
                // node has no children
                if (node.left === null && node.right === null) {
                    return null;
                }
                // node has one child
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }
        
                // node has two children

                let tempNode = findMinNode(node.right);
                node.value = tempNode.value;
                node.right = deleteNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                node.left = deleteNode(node.left, value);
                return node;
            } else {
                node.right = deleteNode(node.right, value);
                return node;
            }
        }
        this.root = deleteNode(this.root, value);
        return this;
    }
}

var tree =new BinarySearchTree();
tree.insert(100);
tree.insert(50);
tree.insert(130);





// tree.root=new Node(10)
// tree.root.right =new Node(15) 
// tree.root.left= new Node(7)
// tree.root.left.right= new Node(9)