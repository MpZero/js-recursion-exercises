// Now write another function fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

const fibsRec = (n, sequence = [0, 1]) => {
  if (sequence.length >= n) {
    return sequence.slice(0, n);
  }

  const newNumber = sequence.at(-1) + sequence.at(-2);
  sequence.push(newNumber);
  return fibsRec(n, sequence);
};

console.log(fibsRec(8));
