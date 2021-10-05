/* Objective 1: Five object literals */
const person1 = {
    name: 'Connie',
    sayHello: function() {
      console.log(`Hello! My name is ${this.name}.`);
    }
  }
  person1.sayHello();
  
  
  const person2 = {
    name: 'Dolly',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
  }
  person2.sayHello();
  
  const person3 = {
    name: 'James',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
  }
  person3.sayHello();

  const person4 = {
    name: 'Mary',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
  }
  person4.sayHello();

  const person5 = {
    name: 'Tony',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
  }
  person5.sayHello();

  /* Objective 2: Call the sayHello function on each object and ccheck the console for the response. */
  let Person = function( Name, City, Age ) {
    this.name = Name;
    this.city = City;
    this.age = Age;
    /* Objective 3: Write a method to print a string */
    this.displayInstance = function() {
      console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
                  };
  };
//now create an Instance of this Class-object
var myObj = new Person("John Doe", "Los Angeles", 20);
//call the Method displayInstance which takes NO parameters
myObj.displayInstance();
/*console.log( myObj );*/
/* Objective 4: Create 5 Instances of the same friends ffrom step1, except use the pseudo class and method created */
Person.prototype.sayHello = function() {
  console.log(`Hello! My name is ${this.name}.`);
}
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

/* Objective 5: Using ES6 syntax makes OOP easier to understand.  Use ES6 syntax to create same class. */
class Persons {
  constructor (name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }
}
const Connie = new Persons ('Connie');
const Dolly = new Persons ('Dolly');
const James = new Persons ('James');
const Mary = new Persons ('Mary');
const Tony = new Persons ('Tony');
console.log(`Hi! My name is ${Persons.name}.`);

/* Inheritance */
/* Objective 1: create a class called vehicle. */
class Vehicle {
  constructor (numwheels, type, manufacturer) {
    this.type;
    this.numwheels;
    this.manufacturer;
  }
  aboutVehicle(){
    console.log(`I am a ${type} vehicle with ${numwheels} wheels, made by ${manufacturer}.`);
  
  class Truck extends Vehicle {
    constructor(type, numwheels, manufacturer, numdoors, steering, truckbed) {
      super(type, numwheels, manufacturer);
      this.numdoors = numdoors;
      this.steering = steering;
      this.truckbed = truckbed;
    if (truckbed != true) {
        truckbed = "no truckbed";
      } else {
        truckbed = "truckbed";
      }
    }
   aboutVehicle() {
      console.log(`I am a ${type} vehicle with ${numwheels} wheels and ${numdoors} doors with steering and ${truckbed}, manufactured by ${manufacturer}.`);
    }
      }
    class Sedan extends Vehicle {
      constructor(type, numwheels, manufacturer, numdoors, size, mpg) {
        super(type, numwheels, manufacturer);
        this.numdoors = numdoors;
        this.size = size;
        this.mpg = mpg;
        }
    
    aboutVehicle() {
       console.log(`I am a ${type} vehicle with ${numwheels} wheels and ${numdoors} doors with steering and ${truckbed}, manufactured by ${manufacturer}.`);
    }
  }
  class Motorcycle extends Vehicle {
    constructor(type, numwheels, manufacturer, handlebars, ) {
      super(type, numwheels, manufacturer);
      this.numdoors = numdoors;
      this.handlebars = handlebars;
      this.
      }
  
  aboutVehicle() {
     console.log(`I am a ${type} vehicle with ${numwheels} and ${numdoors} with ${handlebars} and ${truckbed}, manufactured by ${manufacturer}.`);
  }
}
    }

  }
}



