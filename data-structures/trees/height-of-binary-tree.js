var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
    	node = new Node(data);
    }
 	else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

/* head ends */

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function treeHeight2(root) {
    if(!root) return 0;
    var leftHeight = treeHeight2(root.left);
    var rightHeight = treeHeight2(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

function treeHeight(root) {
    return (treeHeight2(root) - 1).toString();
    
}

   
/* tail begins */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _stdin = "";
var _stdin_array = "";
var _currentline = 0;

process.stdin.on('data', function(data) {
    _stdin += data;
});

process.stdin.on('end', function() {
    _stdin_array = _stdin.split("\n");
    solution();
});

function readLine() {
    return _stdin_array[_currentline++];
}

function solution() {

    var tree = new Tree();
    var n = parseInt(readLine());

    for (var i=0; i<n; i++) {
        var m = parseInt(readLine());
        tree.root = tree.insert(tree.root, m);
    }

    var height = treeHeight(tree.root);
    process.stdout.write(height);
}