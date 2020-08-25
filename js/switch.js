// var color = "blue";

// switch (color) {
//   case "blue":
//     console.log("the sky is blue");
//     break;
//   case "red":
//     console.log("my favorite");
//     break;
//   case "green":
//     console.log("the land is green");
//     break;
//   default:
//     console.log("select a color");
// }

// var i = 10;

// while (i <= 20) {
//   document.getElementById("demo").innerHTML += i + "<br>";
//   // console.log(i);
//   i++;
// }

// var m = 50;

// while (m >= 0) {
//   document.getElementById("demo").innerHTML += m + "<br>";
//   m--;
// }

// var i = 70;
// while (i >= 50) {
//   document.getElementById("demo").innerHTML += i + "<br>";
//   i--;
// }

// var i = 20;

// do {
//   document.getElementById("demo").innerHTML += i + "<br>";
//   i++;
// } while (i <= 10);

// var i;

// for (i = 0; i <= 20; i++) {
//   var a = 1;
//   i += a;
//   console.log(i);
// }

// for (var b = 0; b <= 300; b + 1) {
//   console.log(b);
// }

//FUNCTION
// function greeting() {
//   alert("Good Morning");
// }

// /* function using
// parameters*/

// function sum(a, b) {
//   var sum = a + b;
//   console.log(sum);
//   return sum;
// }

// function userData(name, age, gender, email) {
//   document.getElementById("demo").innerHTML =
//     "My name is " +
//     name +
//     ". I am " +
//     age +
//     " Years Old. I am a " +
//     gender +
//     ". This is my email : " +
//     email;
// }

// var always = new Function("x", "y", "return x+y;");

// function check() {
//   var checkAlways = always(10, 20);
//   alert(checkAlways);

//   return checkAlways;
// }

//OBJECTS

// var laptop = {
//   camera: "2mp",
//   keyboard: "us",
//   charger: "pin",
//   amount: 5000,
// };

// // console.log(laptop.camera);
// document.getElementById("demo").innerHTML += laptop.camera;

// document.getElementById("demo").innerHTML += laptop["amount"];
// //adding a method
// var user = {
//   name: "Daniel",
//   age: 27,
//   hairColor: "brown",
//   eyeColor: "blue",
//   dob: "31st feb 1772",
//   color: function () {
//     return this.eyeColor + ", " + this.hairColor;
//   },
// };
// document.getElementById("demo").innerHTML += "<br>" + user.color();

// var array = ["hp", "dell", "mac", "lenovo", "acer", "samsung"];

// document.getElementById("demo").innerHTML += array[5];

// array[1] = "Toshiba";
// document.getElementById("demo").innerHTML += array;

// document.getElementById("demo").innerHTML += array.length;

// array.push("Huawei");
// array.pop();
// array.slice();

// document.getElementById("demo").innerHTML += array;

// for (var i = 0; i < array.length; i++) {
//   document.getElementById("demo").innerHTML += i + ". " + array[i] + "<br>";
// }

// date set and get methods
// var d = new Date();

// document.getElementById("demo").innerHTML += d.getHours();
// document.getElementById("demo").innerHTML += ": " + d.getMinutes();

//getting date using switch
// var date = new Date();

// switch (date.getDay()) {
//   case 0:
//     alert("Its Sunday");
//     break;
//   case 1:
//     alert("its Monday");
//     break;
//   case 2:
//     alert("Its Tuesday");
//     break;
//   default:
//     alert("Whats today");
// }

// switch (date.getDay()) {
//   case 0:
//     document.getElementById("demo").innerHTML = "Go to church";
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     document.getElementById("demo").innerHTML = "Its a working day";
//     break;
//   case 5:
//     document.getElementById("demo").innerHTML = "TGIF";
//   case 6:
//     document.getElementById("demo").innerHTML = "Its saturday";
//     break;
//   default:
//     document.getElementById("demo").innerHTML = "Whats Happening";
// }

// document.querySelectorAll("good").

// document.getElementById("demo").style.color = "#fff";

// var x = document.getElementById("demo");
// x.style.backgroundColor = "green";

// var img = document.getElementById("img");
// img.src = "images/go.jpg";
// img.style.width = "200px";

// function changeBg() {
//   var body = document.getElementById("body");
//   body.style.backgroundColor = "gray";
// }

// document.querySelector(".good").style.color = "red";

// // document.querySelector(".one").style.color = "yellow";
// var xy = document.getElementsByClassName("one");
// xy[1].style.color = "yellow";
// // var i;
// // for (i = 0; i <= xy.length; i++) {
// //   xy[i].style.color = "yellow";
// // }

// var par = document.getElementsByTagName("p");
// par[0].innerHTML = "shoot";

// const link = document.getElementsByTagName("a");

// link[0].href = "#";

// for (var l = 0; l <= link.length; l++) {
//   link[l].href = "#";
// }

//Events

function myForm() {
  var name = document.querySelector("#firstname");
  var fname = name.value;
  // alert("Welcome " + fname);
}
//select the body
var body = document.getElementsByTagName("body");

var night = document.querySelector(".night");
night.onclick = function () {
  body[0].style.backgroundColor = "#000";
};

// const buttons = document.querySelectorAll(".mode");

// for (let i = 0; i <= buttons.length; i++) {
//   buttons[i].style.color = "red";
// }

const par = document.getElementsByTagName("p");
const sel = document.querySelector("#sel");

sel.onchange = function () {
  par[0].style.fontSize = sel.value;
  // alert(sel.value);
};

//prompt
// var user = prompt("what is your name");
// console.log("your name is " + user);

const con = document.querySelector(".confirm");

con.onclick = function () {
  if (confirm("Do you like reading with red text")) {
    par[0].style.color = "red";
  } else {
    par[0].style.color = "blue";
  }
};

function myName() {
  par[1].innerHTML = "this is me";
}

const myText = document.querySelector(".text");

// myText.addEventListener("click", function () {
//   par[1].innerHTML = "this is me";
// });

// myText.addEventListener("mouseover", function () {
//   par[1].style.color = "orange";
// });

// myText.addEventListener("click", myName);

//Using Arrow Functions

// myText.addEventListener("click", () => alert("this is daniel"));

// myText.addEventListener("click", () => {
//   alert("i am daniel");
// });

const xy = () => prompt("Enter your name");
myText.addEventListener("click", xy);

const newsletter = document.querySelector("#newsletter");
const closeLetter = document.querySelector("#close");

const showLetter = () => {
  newsletter.style.display = "block";
};

setTimeout(showLetter, 10000);

closeLetter.addEventListener("click", () => {
  newsletter.style.display = "none";
});
