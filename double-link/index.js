class Node {
    constructor(data){
        this.pre= null;
        this.data = data;
        this.next = null;
    }
}



class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        
    }

    append(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let current = this.head;
            while (current.next !== null) {
              current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
            this.tail = newNode;  
        }
    }
    display() {
        let current = this.head;
        while (current !== null) {
          console.log(current.data);
          current = current.next;
        }
      }
      get(index) {
        let current = this.head;
        let counter = 0;
    
        while (current !== null) {
          if (counter === index) {
            return current.data;  
          }
          current = current.next;
          counter++;
        }
        return null;  
    }
  removeAt(index){
    if (index < 0) return null;
    let current = this.head;
    let counter = 0;
    if (index === 0) {
        this.head = current.next;
        if (this.head) {
          this.head.prev = null;  
        }
        return current.data;  
      }else{
        while (current !== null) {
            if (counter === index) {
                if (current.prev) {
                    current.prev.next = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                }
                if (current === this.tail) {
                    this.tail = current.prev;
                }
               
            }
            current = current.next;
      counter++;
        }
        console.log(this.tail)
      }




  }

}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.removeAt(0);
console.log("Original List:");
list.display(); // Expected Output: 10, 20, 30, 40, 50