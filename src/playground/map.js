const pets = ["Katze", "Hund", "Axolotl"];

const upper = pets.map((pet) => pet.toUpperCase());

console.log(upper);

const price = [1.34, 2.99, 3.5, 4.99, 5.0, 6.75];

const rounded = price.map(
  (p, index) => `Price (rounded) = ${Math.ceil(p)} at index ${index}`,
);

console.log(rounded);
