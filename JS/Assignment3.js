var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

//How would you print/log John's age?
console.log(users[1].age);
console.log(users.find(x => x.name === "John").age);

// How would you print/log the name of the first object?
console.log(users[0].name);
// console.log(Object.getOwnPropertyNames(users));

// How would you print/log the name and age of each user using a for loop?  Your output should look something like this
for (var i in users) {
    console.log(users[i].name + " - " + users[i].age);
}