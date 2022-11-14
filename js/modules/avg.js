// 1. sukurti avg.js modulio faila.
// 2. sukurti funkcija kuri grazina ir atspausdina 3 argumentu vidurki
// 3. exportuot funkija is avg.js

export default function avg(n1, n2, n3) {
  const avg = (n1 + n2 + n3) / 3;
  console.log(`${n1} + ${n2} + ${n3} / 3 = ${avg}`);
  return avg;
}
console.log(avg(5, 5, 2));
