//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in 
//the Constructor.

function Person(name, age) {
	this.name = name;
	this.age = age;
}
var per1 = new Person('Tom', 22);
var per2 = new Person('Keah', 23);
var per3 = new Person('Jordan', 28);
Person.prototype.sayName = function() {
	return this.name;
}
var per4 = new Person('B', 22);
//Now create three instances of Person with data you make up

  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
