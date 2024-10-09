
class LinkedList{
    lastIndex = 0;
    firstNode = null;
    lastNode = null;
    constructor(node) {
        this.firstNode = node;
        this.lastNode = node;
        node.index = this.lastIndex++;
    }
    append(node) {
        if(this.firstNode == null) {
            this.firstNode = node;
            node.index = this.lastIndex++;
        } else {
            let tmp = this.firstNode;
            while(tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = node;
            node.index = this.lastIndex++;
            this.lastNode = node;
        }
    }
    prepend(node) {
        if(this.firstNode == null) {
            this.firstNode = node;
            firstNode.index = this.lastIndex++;
        } else {
            console.log("we're prepending " + node.value)
            console.log("current head is: " + this.firstNode.value)
            node.nextNode = this.firstNode;
            node.index = this.firstNode.index;
            this.firstNode = node;
            let tmp = node.nextNode;
            while(tmp != null) {
                tmp.index++;
                tmp = tmp.nextNode;
            }
            this.lastIndex++;
        }
    }
    size() {
        return this.lastIndex;
    }
    head() {
        return this.firstNode;
    }
    tail() {
        return this.lastNode;
    }
    at(index) {
        if(index >= this.lastIndex || index < 0) {
            return alert("you're searching for an element that is outside of the list")
        }
        let tmp = this.firstNode;
        while(tmp != null) {
            if(tmp.index == index) {
                return tmp;
            } 
            tmp = tmp.nextNode;
        }
    }
    pop() {
        if(this.lastNode == null) {
            return alert("you're trying to pop the last element from an empty array")
        }
        let tmp = this.firstNode;
        while(tmp.nextNode.nextNode != null) {
            tmp = tmp.nextNode;
        }
        let popped = tmp.nextNode;
        tmp.nextNode = null;
        this.lastIndex--;
        this.lastNode = tmp;
        return popped;
    }
    contains(elem){
        if(this.lastNode == null) {
            return alert("you're searching for something inside an empty array")
        }
        let tmp = this.firstNode;
        while(tmp != null) {
            if(tmp.value === elem) {
                return true;
            } 
            tmp = tmp.nextNode;
        }
        return false;
    }
    find(val){
        if(this.lastNode == null) {
            return;
        }
        let tmp = this.firstNode;
        while(tmp != null) {
            if(tmp.value === val) {
                return tmp.index;
            } 
            tmp = tmp.nextNode;
        }
        return;
    }
    toString() {
        let myString = "";
        let tmp = this.firstNode;
        while(tmp.nextNode != null) {
            myString +="( " + tmp.value + " ) -> "
            tmp = tmp.nextNode;
        }
        myString +="( " + tmp.value + " )";
        return myString;
    }
    insertAt(value, index) {
        if(this.lastNode == null) {
            return alert("can't insert to this value because list is empty")
        }
        if(this.lastIndex < index) {
            return alert("can't insert to this value because list is not that long")
        }
        if(index == 0) {
            //daca suntem la 0, nu avem element la index-1
            let tempNode = new Node(value)
            tempNode.nextNode = this.firstNode;
            tempNode.index = this.firstNode.index;
            let tmp = this.firstNode
            this.firstNode = tempNode;
            while(tmp!=null) {
                tmp.index++;
                tmp = tmp.nextNode;
            }
        } else {
            let tmp = myList.at(index-1);
            let oldNext = tmp.nextNode;
            let oldIndex = tmp.index;
            let tempNode = new Node(value);
            tmp.nextNode = tempNode;
            if(oldNext == null) {
                this.lastNode = tempNode;
            }
            tempNode.nextNode = oldNext;
            tempNode.index = oldIndex;
            tmp = tmp.nextNode
            while(tmp != null) {
                tmp.index++;
                tmp = tmp.nextNode;
            }
        }
        this.lastIndex++;
    }
    removeAt(ind) {
        if(this.lastNode == null) {
            return alert("can't remove at this value because list is empty")
        }
        if(this.lastIndex < ind) {
            return alert("can't remove at this value because list is not that long")
        }
        if(ind == 0) {
            this.firstNode = this.firstNode.nextNode;
            let tmp = this.firstNode;
            while(tmp != null) {
                tmp.index--;
                tmp = tmp.nextNode;
            }
        } else {
            let curr = myList.at(ind-1);
            console.log("current");
            
            console.log(curr)

            curr.nextNode = curr.nextNode.nextNode;
            if(curr.nextNode == null) {
                console.log("suntem in if")
                console.log(curr)
                this.lastNode = curr;
            }
            let tmp = curr.nextNode;
            console.log(tmp)
            while(tmp != null) {
                if(this.lastNode == null) {
                    this.lastNode = tmp.nextNode;
                }
                tmp.index--;
                tmp = tmp.nextNode;
            }
        }
        this.lastIndex--;
    }
}


class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

let firstElement = new Node("John");
let myList = new LinkedList(firstElement)
console.log(myList.toString())

let another = new Node("Michael")
let prepended = new Node("John Cena")
console.log(myList.toString())

myList.append(another)
console.log(myList.toString())

myList.prepend(prepended)
console.log(myList.toString())
let ciucas = new Node("ChewCash");
myList.prepend(ciucas)
console.log(myList.toString())
console.log(myList)
console.log(myList.size())
myList.append(new Node("North"))
console.log(myList.toString())
console.log(myList.at(0));
console.log(myList.pop()) 
console.log(myList.toString())
console.log(myList.find("John Cena"))

console.log(myList.toString())

myList.insertAt("Jackie", 0)
console.log(myList.toString())
myList.removeAt(3)
console.log(myList.toString())

console.log(myList)
