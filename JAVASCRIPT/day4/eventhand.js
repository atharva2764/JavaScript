console.log("hello");

// callback function setTimeout

setTimeout(function cb() {
  console.log("timeout");
}, 5000);

// op

/**
 *  hello
 *  end
 *  timeout   (after 5 sec )
 *
 *
 *
 * the callback queue is in the action
 * after global execution context completes its execution it will start with the callstack
 * and callback functions are called
 *
 * callback function have a closure so it can have a lexical scope of the outer function for the values
 *
 */

document.getElementById("btn")
.addEventListener("click", function cbT() {
  console.log("Button clicked");
});

console.log("end");
