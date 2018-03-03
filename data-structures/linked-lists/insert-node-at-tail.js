
/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    new_node = new Node;
    new_node.data = data;
    new_node.next = null;
    
    let ptr = head;
    if (ptr == null)  {//Empty List
        head = new_node;
    } else {
        while(ptr.next != null) { //Go through the list
            ptr=ptr.next;    
        }
        ptr.next = new_node
    }
    return head;
}
