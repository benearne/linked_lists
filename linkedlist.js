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
	if (this.head === null) {
		return 0;
	}
	
	let count = 1;
	let current = this.head;
	while (current.nextNode !== null) {
		count++;
		current = current.nextNode;
	}
	return count;
  }

  headFunc() {
	// Returns the first node in the list
	return this.head.value;
  }

  tail() {
	// Returns the last node in the list
	let current = this.head;
	while (current.nextNode !== null) {
		current = current.nextNode;
	}

	return current.value;
  }

  pop() {
	// removes the last element from the list
	if (this.head === null) return;
	
	if (this.head.nextNode === null) {
		this.head = null;
		return;
	}

	let current = this.head;
	while (current.nextNode.nextNode !== null) {
		current = current.nextNode;
	}
	
	current.nextNode = null;
  }

  contains(value) {
	// Returns true if the passed in value is in the list an otherwise returns false
	let current = this.head;
	while (current !== null) {
		if (current.value === value) {
			return true
		}
		current = current.nextNode;
	}
	return false; 
  }

  find(value) {
	// returns the index of the node containing value, or null if not found
	let index = 0;
	let current = this.head;

	while (current !== null) {
		if (current.value === value) {
			return index;
		}
		current = current.nextNode;
		index ++;

	}

	return null;
  }

  toString() {
	// represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
	// The format should be: ( value ) -> ( value ) -> ( value ) -> null

	let current = this.head;
	if (current === null) {
		return "null";
	}

	let string = "";
	while (current.nextNode !== null) {
		string += `( ${current.value} ) -> `;
		current = current.nextNode;
	}
	string += `( ${current.value} ) -> null`;
	return string;
  }

  insertAt(value, index) {
	const newNode = new Node(value);

	if (index === 0 || this.head === null) {
		this.prepend(value);
		return;
	}

	let current = this.head;
	let counter = 0;

	while (current !== null) {
		if (counter === index - 1) {
			newNode.nextNode = current.nextNode;
			current.nextNode = newNode;
			return;
		}
		current = current.nextNode;
		counter ++;
	}

	console.log("index to high, list not long enough");
  }

  removeAt(index) {
	if (this.head === null) {
		console.log("list is empty");
		return;
	}

	if (index === 0) {
		this.head = this.head.nextNode;
	}

	let counter = 0;
	let current = this.head;

	while (current.nextNode !== null) {
		if (counter === index - 1) {
			current.nextNode = current.nextNode.nextNode;
			return;
		}
		current = current.nextNode;
		counter ++;
	}
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); 

list.insertAt("katze", 2);
list.removeAt(4);

console.log(list.toString()); 


