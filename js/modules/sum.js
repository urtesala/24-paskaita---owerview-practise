"use strict";
console.log("sum.js");

export default function sum(n1, n2) {
  const sum = n1 + n2;
  console.log(`${n1} + ${n2} = ${sum}`);
  return sum;
}
