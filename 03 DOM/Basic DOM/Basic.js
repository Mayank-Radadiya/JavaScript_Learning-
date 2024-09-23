//     DOM:
//    Document Object Model

// Mostly  4 use in DOM.

//   1. selection of elements
// 2. Changing  HTMl
// 3. Changing  CSS
// 4.   Event listeners

//  select elements form Html   Using this function
var x = document.querySelector("h1");


//  There are more then one "h1" and we want  to select all  that time we  use   "querySelectorAll"

console.log(x);

// Change in Html

// Already  we have  "x" element which is h1 of html.Noe we can change the h1 text.

x.innerHTML = "Hello World";

// Change in CSS

x.style.color = "white";
x.style.backgroundColor = "black";

// Event Listener :

x.addEventListener("click", function () {
  x.style.color = "pink";
  x.innerHTML = "i Love you";
});

x.addEventListener("mousemove", function () {
  x.style.color = "yellow";
  x.innerHTML = "Hey!!!";
});

//           Button on / off

var z = document.querySelector("#bulb");

var y = document.querySelector("button");

var count = 0;
y.addEventListener("click", function () {
  if (count == 0) {
    z.style.backgroundColor = "black";
    count = 1;
    y.innerHTML = "Turn On";
   
  } else {
   
    z.style.backgroundColor = "yellow";
    count = 0;
    y.innerHTML = "Turn Off";
  }
});
