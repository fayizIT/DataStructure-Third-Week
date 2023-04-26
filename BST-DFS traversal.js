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
    

//inorder
DFSinorder(){
    let value = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        value.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return value;
}

  //preorder
   DFSpreorder(){
            let value = [];
            function traverse(node){
                value.push(node.value)
                if(node.left) traverse(node.left); 
                if(node.right) traverse(node.right)                    
            }
            traverse(this.root);
            return value;
        }

        //postorder
   DFSpostorder(){
    let value = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        value.push(node.value)
    }
    traverse(this.root);
    return value;
 }
}

var tree =new BinarySearchTree();
tree.insert(100);
tree.insert(50);
tree.insert(130);