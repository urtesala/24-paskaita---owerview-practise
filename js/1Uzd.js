"use strict";
console.log("1Uzd.js");

//^ Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.

const user = [
  { name: "Urte" },
  { surname: "Saladžiūtė" },
  { about: "Lithuanian native living in Vilnius and studying front-end" },
  { picture: "https://picsum.photos/200" },
];

console.log(JSON.stringify(user, null, 2));

const userJson = JSON.stringify(user);
localStorage.setItem("user", userJson);

localStorage.getItem("user", userJson);

document.body.append();
