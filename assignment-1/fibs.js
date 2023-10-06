// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

let arr = [];
function fib(n) {
  if (n < 1) {
    return arr.push(n);
  }
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    let c = a + b;
    arr.push(a);
    a = b;
    b = c;
  }
  console.log(arr);
}

fib(8);
