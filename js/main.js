// importuoti {ka} from 'is kur'
// named export import
import { username as uname, town } from "./modules/vars.js";
import susumuoti from "./modules/sum.js";
// default export import
import user from "./modules/vars.js";

console.log("main.js");

// const username = 'James';

console.log(
  "`user ${uname} is from ${town}` ===",
  `user ${uname} is from ${town}`
);

console.log("user.name ===", user.name);
console.log("user ===", user);

const a = 10;
const b = 140;

const s1 = susumuoti(a, b);
susumuoti(s1, 400);

// 1. sukurti avg.js modulio faila.
// 2. sukurti funkcija kuri grazina ir atspausdina 3 argumentu vidurki
// 3. exportuot funkija is avg.js
// 4. importuoti ir panaudoti ja main.js su 3 skaiciais.
