// function flutten(...stack) {
//   const result = [];
//   while (stack.length) {
//     const el = stack.shift();
//     if (Array.isArray(el)) {
//       stack.unshift(...el);
//       continue;
//     }
//     result.push(el);
//   }
//   return result;
// }

// console.log(flutten(1, 2, [12, 22], [[1]], [123, [65]]));

// function calculate(expression) {
//   const arr = expression.split(' ');
//   const stack = [];

//   while (arr.length) {
//     const el = arr.pop();
//     const numberedEl = Number(el);
//     if (!isNaN(numberedEl)) {
//       stack.push(numberedEl);
//       continue;
//     }
//     const firstEl = stack.pop();
//     const secondEl = stack.pop();

//     switch (el) {
//       case '+':
//         stack.push(firstEl + secondEl);
//         break;
//       case '-':
//         stack.push(firstEl - secondEl);
//         break;
//       case '*':
//         stack.push(firstEl * secondEl);
//         break;
//       case '/':
//         stack.push(firstEl / secondEl);
//         break;
//     }
//   }
//   return stack[0];
// }

// console.log(calculate('+ 3 5'), 8);
// console.log(calculate('+ * 1 2 / 1 2'));

function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  }
  const queue = [...customers];
  const tills = Array(Math.min(n, customers.length)).fill(0);
  while (queue.length) {
    const customer = queue.shift();
    const tillMinId = tills.indexOf(Math.min(...tills));
    tills[tillMinId] += customer;
  }
  return Math.max(...tills);
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
