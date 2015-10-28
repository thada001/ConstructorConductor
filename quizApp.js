//We're going to create the JS for a basic quiz application. 
//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 
//\\Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly
function User(name, email, pw, totScore) {
	this.name = name;
	this.email = email;
	this.password = pw;
	this.totalScore = totScore;
}
function Question(title, ansArr, rAns, dif) {
	this.title = title;
	this.answersArray = ansArr;
	this.rightAnswer = rAns;
	this.difficulty = dif;
}
var users = [];
users.push(new User('Tom', 't@t.com', 'tomspw', 100));
users.push(new User('Jon', 'j@j.com', 'jonspw', 100));
users.push(new User('Marty', 'm@m.com', 'martyspw', 100));
var questions = [];
questions.push(new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', ['T', 'F'], 'T', 'easy'));
questions.push(new Question('T/F: JavaScript is just a scripting version of Java', ['T', 'F'], 'F', 'easy'));
questions.push(new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", ['T', 'F'], 'T', 'easy'));
console.log('My users Array and my questions arrray are ...');
var q1 = prompt('T/F: Inheritance is achieved in JavaScript through Prototypes?');
if (q1 === questions[0].rightAnswer) {
	alert("You are correct!");
}else {
	alert("Try again idiot");
}
var q2 = prompt('T/F: JavaScript is just a scripting version of Java');
if (q1 === questions[1].rightAnswer) {
	alert("You are correct!");
}else {
	alert("Try again idiot");
}
var q3 = prompt("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value");
if (q1 === questions[2].rightAnswer) {
	alert("You are correct!");
}else {
	alert("Try again idiot");
}
/*
for (var i = 0; i < users.length; i++) {
	console.log(users[i]);
};
for (var i = 0; i < questions.length; i++) {
	console.log(questions[i]);
};
*/

//\\Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters
//\\Create a users Array which is going to hold all of our users.
//\\Let's say three people signed up for our service, create 3 instances of User and add each to the users Array
//\\Create a questions Array which is going to hold all of our questions
//\\Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the 
//\\following data
//\\title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//\\title: 'T/F: JavaScript is just a scripting version of Java'
//\\title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//\\Fill in the rest of the required data as you see appropriate.
//\\Now push all of your instances of Question into the questions Array
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here

