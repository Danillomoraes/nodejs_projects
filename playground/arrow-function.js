var square = x =>  x*x ;
console.log(square(9));

var user = {
  name: "Danillom",
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`);
  }
};

//arrow function
user.sayHi(1,2,3);

//regular is6 function
user.sayHiAlt(1,2,3);
