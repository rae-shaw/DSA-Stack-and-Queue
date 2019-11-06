class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
            const node = new _Node(data);

            if (this.first === null) {
                this.first = node;
            }

            if (this.last) {
                this.last.next = node;
            }
            //make the new node the last item on the queue
            this.last = node;
        }

     dequeue() {
            //if the queue is empty, there is nothing to return
           if (this.first === null) {
               return;
           }
           const node = this.first;
           this.first = this.first.next;
            //if this is the last item in the queue
           if (node === this.last) {
               this.last = null;
           }
           return node.value;
       }
}

const starTrekQ = new Queue

starTrekQ.enqueue(Kirk)
starTrekQ.enqueue(Spock)
starTrekQ.enqueue(Uhura)
starTrekQ.enqueue(Sulu)
starTrekQ.enqueue(Checkov)

const peek = function(queue){
	queue.dequeue()
	queue.enqueue(node.value)
}

const isEmpty = function(queue){
	if(this.first === null){
		return 'Nothing to see here'
	}else{
		return 'Something to see here'
	}
}

 const display = function(queue){
    if (!stack.first) {
        return 'Nothing to see here!'
    }
    let current = stack.first;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
    return;
	}

	starTrekQ.dequeue(Spock)
	display(starTrekQ)

	