class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a node at the end of the list
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to display the linked list
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Method to get the element at a specific index
  get(index) {
    let current = this.head;
    let counter = 0;

    // Traverse the list to find the node at the given index
    while (current !== null) {
      if (counter === index) {
        return current.data; // Return the data of the node at the specified index
      }
      current = current.next;
      counter++;
    }
    return null; // Return null if the index is out of bounds
  }

  // Method to remove a node at a specific index
  removeAt(index) {
    if (index < 0) return null;

    let current = this.head;
    let counter = 0;

    // If the head node needs to be removed
    if (index === 0) {
      this.head = current.next;
      return current.data; // Return the data of the removed node
    }

    // Traverse to find the node just before the one to be removed
    while (current !== null) {
      if (counter === index - 1) {
        if (current.next === null) return null; // If no node exists at the next index
        current.next = current.next.next; // Skip the node to be removed
        return; // Node is removed, return nothing
      }
      current = current.next;
      counter++;
    }
    return null; // If index is out of bounds
  }

  // Method to clear all nodes from the list
  clearList() {
    this.head = null; // Simply set head to null to clear the list
  }

  // Method to clear the data from the list
  clearAllData() {
    this.head = null; // This also clears all data, same as clearList
  }
}

// Testing the updated Linked List
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

// Display the list
console.log("Original List:");
list.display(); // Expected Output: 10, 20, 30, 40, 50

// Get the element at index 2
console.log("Element at index 2:", list.get(2)); // Expected Output: 30

// Remove the element at index 1 (removes 20)
list.removeAt(1);
console.log("After Removing at Index 1:");
list.display(); // Expected Output: 10, 30, 40, 50

// Clear the entire list
list.clearList();
console.log("After Clearing the List:");
list.display(); // Expected Output: (Nothing, the list is empty)

// Adding elements back to test clearing all data
list.append(100);
list.append(200);
console.log("After Adding New Data:");
list.display(); // Expected Output: 100, 200

// Clear all data
list.clearAllData();
console.log("After Clearing All Data:");
list.display(); // Expected Output: (Nothing, the list is empty)
