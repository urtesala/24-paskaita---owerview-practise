"use strict";
console.log("3Uzd.js");

//^ sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje (randomUserApi.avif). Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

const url = "https://randomuser.me/api/";

fetch(url)
  .then((response) => response.json())
  .then((dataInJsFormat) => {
    console.log("dataInJsFormat ===", dataInJsFormat);
  })
  .catch((err) => console.warn("klaida gaunant users", err));

// is gautu duomenu atvaizduoti sarasa su vardais ir tel numeriais
