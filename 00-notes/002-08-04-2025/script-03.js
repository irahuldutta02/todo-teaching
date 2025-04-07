const obj = {
  name: "Rahul",
  greet: function () {
    return `Hello, ${this.name}`;
  },
};

const greetFn = obj.greet;
console.log(greetFn());

// console.log(1 + '2' + 3); // "12" + 3 > "123"
// console.log(1 + +'2' + 3); // 1 + 2 + 3 > 6

