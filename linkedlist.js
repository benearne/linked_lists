class Node {
	constructor(value) {
		this.value = value;
		this.nextNode = null;
	}
}

class LinkedList {
  constructor() {
	this.head = null;
  }

  append(value) {
	// Adds new node containing value to the end of the list
	const newNode = new Node(value);

	if (this.head === null) {
		this.head = newNode;
		return;
	}

	let current = this.head;
	while (current.nextNode !== null) {
		current = current.nextNode;
	}

	current.nextNode = newNode;
  }

  prepend(value) {
	// Adds new node containing value to the start of the list
	const newNode = new Node(value);

	if (this.head === null) {
		this.head = newNode;
		return;
	}

	let newHead = newNode;
	newHead.nextNode = this.head;
	this.head = newHead;
  }

  size() {
	// returns the total number of nodes in the list
	let count = 0;

	let current = this.head;
	while (current.nextNode !== null) {
		count++;
	}
	return count;
  }

  head() {
	// Returns the first node in the list
  }

  tail() {
	// Returns the last node in the list
  }

  pop() {
	// removes the last element from the list
  }

  contains(value) {
	// Returns true if the passed in value is in the list an otherwise returns false
  }

  find(value) {
	// returns the index of the nove containing value, or null if not found
  }

  toString() {
	// represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
	// The format should be: ( value ) -> ( value ) -> ( value ) -> null
  }
}

const list = new LinkedList();
list.append("dog");
list.prepend("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Ausgabe aller Werte
let current = list.head;
while (current !== null) {
	console.log(current.value);
	current = current.nextNode;
}

console.log(list.size());


