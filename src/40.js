// Define an object with various properties and values
const person = {
  name: "John",
  age: 30,
  job: "teacher"
};

// Access the value associated with the 'name' property
console.log(person.name); // Output: John

// Change the value of a specific property (e.g., age)
person.age = 40;
console.log(person.age); // Output: 40

// Use destructuring to access multiple properties
const { name, job } = person;
console.log(`${name} is a ${job}.`);
