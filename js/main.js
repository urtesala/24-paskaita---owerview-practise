// importuoti {ka} from 'is kur'
// named export import
import { username as uname, town } from "./modules/vars.js";
import susumuoti from "./modules/sum.js";

// 3. exportuot funkija is avg.js
import avg from "./modules/avg.js";

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

const num1 = 4;
const num2 = 6;
const num3 = 11;

// 4. importuoti ir panaudoti ja main.js su 3 skaiciais.
const avgCia = avg(num1, num2, num3);
