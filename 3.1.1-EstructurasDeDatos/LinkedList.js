class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = new LinkedListNode(data);
    }

    appendNode(node){
        if(this.head.next === null){
            this.head.next = node;
            return;
        }
        let currentNode = this.head.next;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    printAllData(){
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

const node1 = new LinkedListNode(2);
const node2 = new LinkedListNode(4);
const node3 = new LinkedListNode(6);

/* console.log(node1);
console.log(node2);
console.log(node3); */

const myLinkedList = new LinkedList(20);


myLinkedList.appendNode(node1);
myLinkedList.appendNode(node2);
myLinkedList.appendNode(node3);

console.log(myLinkedList);

myLinkedList.printAllData();