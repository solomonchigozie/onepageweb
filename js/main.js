function sayWelcome() {
  alert("welcome boy");
}
var d = 10;
var e = 5;

console.log("the sum is : " + (d += e));
console.log((d -= e));
console.log((d *= e));
console.log((d /= e));
console.log(2 === 2);
console.log(3 >= 4);
console.log(3 != 3);

var daniel = "boy";

if (daniel == "boy") {
  console.log("make her hair");
} else {
  console.log("cut his hair");
}

var age = 20;
var notice;

if (age >= 21 && age <= 24) {
  notice = "come in to the party";
} 
else if (age == 20) {
  notice = "we will just consider you";
}
 else if (age == 19) {
  notice = "wait till you are 20";
} 
else if (age > 25) {
  notice = "Sorry, this is not for you";
} 
else {
  notice = "What is your age please";
}
console.log(notice);
