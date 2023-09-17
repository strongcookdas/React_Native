const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// console.log(person);
// console.log(person.greet());

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

//배열 반환
console.log(
  hobbies.map((bobby) => {
    return "Hobby: " + bobby;
  })
);
console.log(hobbies);

//배열 수정
// hobbies.push("Programming");
// console.log(hobbies);

//slice 배열복사 함수
// const copiedArray = hobbies.slice();
// console.log(copiedArray);

const copiedArray2 = [...hobbies];
console.log(copiedArray2);

const copiedPerson = { ...person };
console.log(copiedPerson);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
