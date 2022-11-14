"use strict";
console.log("vars.js");

// named export - importuojam {}
export const username = "Mike";

export const town = "Jordan";

const user = {
  name: "James",
  age: 25,
};

function sayHi() {
  console.log("hello from vars");
}

// runs on import
// sayHi();

// default export, numatytasis - importujam su kintamojo pavadinimu
export default user;
