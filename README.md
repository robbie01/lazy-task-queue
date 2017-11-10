# lazy-task-queue: an automatic queue of lazy tasks

## What is this?
The `lazy-task-queue` is an automatic queue of lazy tasks (a.k.a. no-parameter functions that return a promise).

## What purpose does it serve?
It was originally created for a Discord music bot I was creating. All of the libaries I could find evaluated strictly, whereas I wanted it to be evaluated lazily. Maybe I'm just dumb :P

## How do I use this?
```js
const TaskQueue = require('lazy-task-queue');
const q = new TaskQueue();

const delay = ms => new Promise(res => setTimeout(res, ms)); // for demonstration purposes

q.add(async () => {
	console.log("Hi!");
	await delay(1000);
});
q.add(async () => {
	console.log("Hi again!");
});

/* Output:
 * Hi!
 * <1 second delay>
 * Hi again!
 */
```