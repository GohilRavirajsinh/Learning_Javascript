/*
===========================================
THREADS IN JAVASCRIPT - EXPLANATION
===========================================

1. MAIN THREAD (Single Threaded Model)
---------------------------------------
JavaScript runs on a SINGLE MAIN THREAD called the "Call Stack".
This means JavaScript can only execute ONE thing at a time.

Example:
*/
console.log('1');
console.log('2');
console.log('3');
// Output: 1, 2, 3 (executes one after another, sequentially)

/*
// 2. SYNCHRONOUS VS ASYNCHRONOUS CODE IN JAVASCRIPT
// --------------------------------------------------
// Definition:

// Synchronous code executes one line after another, in order.
// Each operation waits for the previous one to finish before running.
// Example:
console.log('A');
console.log('B');
console.log('C');
// Output: A, B, C (order is always the same)

// Asynchronous code does NOT block the execution of the following code.
// Operations like timers, network requests, or user events can run "in the background".
// The code continues running while these async operations are handled,
// and their results are processed (via callbacks, promises, etc.) when ready.

// Example:
console.log('First');

setTimeout(() => {
    console.log('Async!');
}, 1000);

console.log('Last');
// Output: First, Last, (after 1 second) Async!

// Difference:
// - Synchronous: Tasks finish one-by-one, in order. Later code waits for earlier code.
// - Asynchronous: Some tasks start, but JS moves on to next code without waiting. When async task finishes, its code runs (e.g., via callback).
-------------------------------------------
Even though JavaScript is single-threaded, it can handle async operations
using the Event Loop, Callback Queue, and Web APIs.

Components:
- Call Stack: Where synchronous code executes
- Web APIs: Handle async operations (setTimeout, fetch, DOM events)
- Callback Queue: Stores callbacks from Web APIs
- Event Loop: Moves callbacks from Queue to Stack when Stack is empty

Example with setTimeout:
*/
console.log('Start');

setTimeout(() => {
    console.log('Async operation');
}, 0);

console.log('End');
// Output: Start, End, Async operation
// Why? setTimeout goes to Web API, then Callback Queue, then Call Stack

/*
3. PROMISES AND ASYNC/AWAIT
----------------------------
Promises use microtask queue (higher priority than callback queue)

Example:
*/
console.log('1');

Promise.resolve().then(() => console.log('2'));

setTimeout(() => console.log('3'), 0);

console.log('4');
// Output: 1, 4, 2, 3
// Why? Microtasks (Promises) execute before Macrotasks (setTimeout)

/*
4. WEB WORKERS (Multi-threading in Browser)
--------------------------------------------
Web Workers allow you to run JavaScript in separate threads.
They don't share memory with the main thread (no shared state).

Main Thread:
*/
// main.js
const worker = new Worker('worker.js');
worker.postMessage('Hello Worker!');
worker.onmessage = (e) => {
    console.log('Message from worker:', e.data);
};

// worker.js (separate file)
// self.onmessage = (e) => {
//     console.log('Message from main:', e.data);
//     self.postMessage('Hello Main!');
// };

/*
5. WORKER THREADS (Node.js)
---------------------------
In Node.js, you can use worker_threads module for multi-threading.

Example:
*/
// main.js (Node.js)
// const { Worker } = require('worker_threads');
// const worker = new Worker(__filename.replace('.js', '-worker.js'));
// worker.postMessage('Hello from main thread!');

/*
6. KEY DIFFERENCES
------------------
Main Thread:
- Single execution context
- Synchronous code blocks everything
- Async code uses Event Loop

Web Workers / Worker Threads:
- Separate execution context
- Can run CPU-intensive tasks without blocking main thread
- No shared memory (communicate via messages)
- Cannot access DOM (in browsers)

7. PRACTICAL EXAMPLE - Blocking vs Non-blocking
------------------------------------------------
*/

// BLOCKING CODE (blocks main thread)
function blockingTask() {
    console.log('Blocking task started');
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    console.log('Blocking task completed');
    return sum;
}

// NON-BLOCKING CODE (uses Web Worker or breaks into chunks)
function nonBlockingTask() {
    console.log('Non-blocking task started');
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Non-blocking task completed');
            resolve('Done');
        }, 1000);
    });
}

/*
8. WHEN TO USE THREADS
----------------------
Use Web Workers / Worker Threads when:
- Heavy computations (image processing, data analysis)
- Large data processing
- Background tasks that shouldn't block UI

Don't use threads for:
- DOM manipulation (Web Workers can't access DOM)
- Simple async operations (use Promises/async-await)
- Operations that need shared state

9. VISUAL REPRESENTATION
------------------------
Main Thread Execution:
┌─────────────────┐
│   Call Stack    │ ← Synchronous code executes here
└─────────────────┘
        ↓
┌─────────────────┐
│   Event Loop    │ ← Checks if stack is empty
└─────────────────┘
        ↓
┌─────────────────┐
│ Callback Queue  │ ← Async callbacks wait here
└─────────────────┘
        ↓
┌─────────────────┐
│   Web APIs      │ ← setTimeout, fetch, etc.
└─────────────────┘

With Web Worker:
┌─────────────────┐      ┌─────────────────┐
│   Main Thread   │ ←──→ │  Worker Thread  │
│   (UI Thread)   │      │  (Background)   │
└─────────────────┘      └─────────────────┘
     (DOM)                    (No DOM)
*/

// Example: Heavy computation without blocking
function heavyComputation() {
    return new Promise((resolve) => {
        // Simulate heavy work
        setTimeout(() => {
            let result = 0;
            for (let i = 0; i < 1000000; i++) {
                result += i;
            }
            resolve(result);
        }, 0);
    });
}

// This won't block the UI completely, but still runs on main thread
heavyComputation().then(result => {
    console.log('Computation result:', result);
});

console.log('This runs immediately (non-blocking)');

/*
SUMMARY
-------
- JavaScript is SINGLE-THREADED by default
- Uses EVENT LOOP for async operations
- WEB WORKERS allow multi-threading (separate context, no shared memory)
- Promises use MICROTASK QUEUE (higher priority)
- Main thread handles UI, Workers handle heavy computations
*/
