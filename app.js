"use strict";

// destructuring
// 01. array destructuring

const countryName = ["Bangladesh", "India", "Malaysia", "Japan", "China"];
const visiteCountry = countryName.at(2 - 7); //try new
console.log(visiteCountry);

const resultGpa = [4.5, 5.0, 3.45, 3.05, 5.0];

const [Shanta, Rahat, fahim, korim, mithila] = resultGpa;

console.log(Shanta, Rahat, fahim, korim, mithila);

const friends = ["arif", "farhad", "al-amin", "keyam"];
const [a, b, c, d] = friends;
console.log(a, b, c, d);
const [, num2, , num4] = friends;
console.log(num2, num4);

const tempareture = ["26deg", "34deg", "23deg"];
const [dhaka, , cumilla] = tempareture;
console.log(dhaka, cumilla);

let x = 5;
let y = 3;
let z;

z = x;
x = y;
y = z;
[x, y] = [y, x];
console.log(x, y);

//  nested array des
/* const MyArr = [1, 2, 3, [4, [5, 6], 7]];
const [, , x, [y, [, z], p]] = MyArr;
console.log(x, y, z, p);
 */
const mobileBd = [
  "redmi",
  "mi",
  [
    "samsung",
    ["note-9", "note-10", "note-11", ["ultraModel", "s20", "s21+", "s23"]],
  ],
];

const [mobile1, , [mobile2, [, model, , [bigestmodel, , big1, big2]]]] =
  mobileBd;
console.log(mobile1, mobile2, model, bigestmodel, big1, big2);

// 02. object destructuring

const colothBoys = {
  coloth: "T-Shart",
  size: 36,
  colothColor: ["White", "Blue", ["Black", "Cream"]],
};

const {
  coloth,
  size,
  colothColor: [color1, , [color2, ,]],
  color3 = "Red",
} = colothBoys;
console.log(coloth, size, color1, color2, color3);

// spread operator
const southAsia1 = ["bangladeh", "india", "pakistan"];
const southAsia2 = ["nepal", "maldives", "sri-lanka"];
const wholeSouthAsia = [...southAsia1, ...southAsia2]; //spread -->unpacked
console.log(wholeSouthAsia);

const obj1 = {
  name: "mithila",
  age: 18,
  study: "HSC",
};

const obj2 = { ...obj1 };

obj2.name = "Sadiya🫡";

console.log(obj1);
console.log(obj2);

// rest pattern --> array
const evenNums = [34, 56, 78, 22, 89];

const [even1, , even2, ...others] = evenNums; //pack
console.log(even1, even2, others);

// rest pattern ojbject
const student = {
  identy: "Ariful",
  seaction: "commarce",
  passYear: 2023,
};

const { seaction, ...arif } = student;
console.log(seaction, arif);

// rest param
function sum(x, y, ...others) {
  console.log(others);
  return x + y;
}
const arrTest = [5, 6];

console.log(sum(...arrTest, 67, 90, 2));

const doMath = (x, y, ...arg) => {
  const result = x - y;
  let sum = 0;

  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }

  return {
    subtract: result,
    sum: sum,
  };
};

console.log(doMath(53, 45, 3, 44, 5));

// short circuiting

const isWinter = true;

const product = isWinter && "buy jaket";
console.log(product);

const myNums = 10;

myNums >= 10 && console.log("10");
console.log(myNums || "10");

const myResult = 21;
const lossYear = myResult || 100;

const ourResult = 0;
const lossingYear = ourResult ?? 100; //nullish coalsing operator (nco)
console.log(lossYear);
