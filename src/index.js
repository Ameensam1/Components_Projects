import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// let userName = "Ameen";
// let name = "Sams";
// if (true) {
//   name = "Sams";
// }
//console.log(name);
// const substrName = userName.substr(1, 2);
// const substringName = userName.substring(1, 4);
// let substrNameToupper = userName.toUpperCase();
// let substrNameToLower = userName.toLowerCase();
// let greeting = `Hello, ${name} ${userName}`;
// let greetUpper = greeting.toUpperCase();
// let greetLower = greeting.toLowerCase();
// let spacesName = "  Sams Dev  " + " ";
// let greetRemoveWhitespace = spacesName.trim();
//let replaceName = spacesName.replace()

// console.log(greeting);
// console.log(greetUpper);
// console.log(greetLower);
// console.log("substrName: " + substrName);
// console.log("substringName: " + substringName);
// console.log(substrNameToupper);
// console.log(substrNameToLower);
// console.log(greetRemoveWhitespace);
// console.log(spacesName);

//Object

// const user = {
//   name: "Sams Dev",
//   Age: "27",
//   Job: "Developer",
//   "Special Areas": {
//     Languages: ["Apex", "Javascript", "CSS", "HTML"],
//     Skills: ["LWC", "Visualforce", "Triggers"]
//   }
// };

// console.log(user);
// console.log(user.name);

// let stringifyObj = JSON.stringify(user); //converts js Object to JSON
// console.log(stringifyObj);

// let parseJson = JSON.parse(stringifyObj);
// console.log(parseJson);

// let name = "Sams Dev";
// let splitName1 = name.split(" "); // Returns array of strings
// let splitName2 = name.split(); // Returns array of strings
// console.log(splitName1);
// console.log(splitName2);
// let indexOfName = name.indexOf("e");
// console.log(indexOfName);
// let replaceName = name.replace("Ameen", "Developer");
// console.log(replaceName);
// let wordLength = replaceName.length;
// console.log(wordLength);

// if (name.length > 8) {
//   let returnName = name.substr(0, 8);
//   console.log(returnName);
//   if (name.includes("Sams")) {
//     console.log(`${name} is a Superhero`);
//   }
// }

//Arrays
//Syntax 2 using array constructor
// let studentNames2 = new Array(4);
// studentNames2[0] = "Sams Dev";
// studentNames2[1] = "Jason Bourne";
// studentNames2[2] = "Will Smith";
// studentNames2[3] = "Jack Bauer";

// console.log(studentNames2);

//Syntax 1 using array literal [] - Preffered
// let studentNames1 = ["Sams Dev", "Jason Bourne", "Will Smith", "Jack Bauer"];
// console.log(studentNames1.length); // 4
//console.log(studentNames1);

//Array methods
// console.log(studentNames1.push("Mel Gibson")); // Push: adding to array elements

// console.log(studentNames1);
// console.log(studentNames1.pop());
// console.log(studentNames1.shift());
// console.log(studentNames1.unshift("Sams Dev"));
// console.log(studentNames1.reverse());
// console.log(studentNames1.values());
// console.log(studentNames1.sort());

// let x = ["a", "b", "c", "d", "e", "a"];

// console.log(x.lastIndexOf("b"));
//console.log(x);
//x.push("d");
//x.pop();
//console.log(x.length);
//console.log(x.reverse());
//console.log(x.splice(1, 3));
//console.log(x.join('-'));
//console.log(x.join(' '));

// console.log(x.slice(1, 3)); // returns a new array but not mutate original array
// console.log(x.splice(1, 3));

// let y = [1, 2, 3];

// let concatArray = x.concat(y);
// console.log(concatArray);

const obj2 = [
  { name: "Sams", age: 27 },
  { name: "Jake", age: 23 },
  { name: "Alen", age: 29 },
  { name: "Mike", age: 40 }
];

// obj2.map(function (currentItem, index, actualArr) {
//   console.log("currentItem: ", currentItem);
//   console.log("index: ", index);
//   console.log("actualArr: ", actualArr);

//   return { key: currentItem.name, value: currentItem.age };
// });

// console.log(
//   obj2.every(function (currentItem, index, actualArr) {
//     return currentItem.age > 20;
//   })
// );

// console.log(
//   obj2.filter(function (currentItem, index, actualArr) {
//     return currentItem.age > 27;
//   })
// );

// console.log(
//   obj2.some(function (currentItem, index, actualArr) {
//     return currentItem.age > 40;
//   })
// );

// console.log(
//   obj2.sort(function (a, b) {
//     return b.age - a.age;
//   })
// );

let nums = [10, 20, 30, 40];
// console.log(
//   nums.reduce(function (firstElement, nextElement, index, actualArr) {
//     console.log("firstElement", firstElement);
//     console.log("nextElement", nextElement);

//     return firstElement + nextElement;
//   },0)
// );

console.log(
  nums.reduceRight(function (firstElement, nextElement, index, actualArr) {
    console.log("firstElement", firstElement);
    console.log("nextElement", nextElement);
    return firstElement + nextElement;
  }, 0)
);
