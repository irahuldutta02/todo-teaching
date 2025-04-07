const arr = [1, 2, 3];

// old way of destructuring
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

// console.log(first); // 1
// console.log(second); // 2
// console.log(third); // 3

// new way of destructuring
const [first, second, third] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

// old way
// const name = obj.name;

// new way
const { name, age, city } = obj; // destructuring assignment

console.log(name); // John
console.log(age); // 30
console.log(city); // New York
