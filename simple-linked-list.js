//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//             

/**
 * class Element
 */
class Element {  

  constructor(value) {

    this.value = value   
    this.next = null

  }     

}

/**
 * class List 
 */
class List {

  constructor(arr = []) {

    this.head = null
    arr.forEach(el => this.add(new Element(el)))

  }

// get the lenght
  get length() {

    return this.countNodes()

  }

// add the elements
  add(el) {

    this.head = {...el, next: this.head}

  }

// count the number of the nodes
  countNodes(node = this.head, count = 0){

    return node ? this.countNodes(node.next, ++count) : count;

  }

// convert to array
  toArray(node = this.head, arr = []) {

    arr.push(node.value)

    if (node.next) {

      node = node.next
      return this.toArray(node, arr)

    }      

    return arr

  }

// reverse the list
  reverse(prev = null) {

    if (this.head.next) {

      const current = this.head
      this.head = this.head.next
      current.next = prev
      return this.reverse(current)

    }

    this.head.next = prev
    return this

  }

}   
/**
 * export the class
 */ 

export { 

  Element,
  List,
  
}
