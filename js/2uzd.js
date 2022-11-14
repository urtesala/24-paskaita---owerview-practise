"use strict";
console.log("2uzd.js");

//^ Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).

function getHours(age) {
  const today = 2022;
  const daysLived = age * 365;
  return Math.floor(daysLived);
}
console.log(getHours(27));
