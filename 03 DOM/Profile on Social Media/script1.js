
//Friend Request.

var add = document.querySelector("#but1");
var count = 0;

var text = document.querySelector("#p2");

add.addEventListener("click", function () {
  if (count == 0) {
    add.innerHTML = " Cancel Request";
    add.style.backgroundColor = "rgba(255, 0, 0, 0.74)";
    count = 1;
    add.style.transition = "all ease-in 0.4s ";
    text.innerHTML = "Friend";
    text.style.color = "green";
  } else {
    add.innerHTML = "Add Friend";
    add.style.transition = "all ease-in 0.4s";
    add.style.backgroundColor = "rgb(117, 150, 249)";
    count = 0;
    text.innerHTML = "Stranger";
    text.style.color = "rgba(255, 0, 0, 0.811)";
  }
});






//     Like button



var img = document.querySelector("img");
var like = document.querySelector("#love1");
var like1 = document.querySelector("#love2");
var count1 = 0;

img.addEventListener("dblclick", function () {
  like.style.color = "red";
  like.style.transform = " translate(-60%,-50%) scale(1)";
  like1.style.color = "red";

  setTimeout(function () {
    like.style.transform = " translate(-60%,-50%) scale(0)";
  }, 2000);
  var count1 = 1;
});

like1.addEventListener("click", function () {
  if (count1 == 0) {
    like.style.color = "red";
    like.style.transform = " translate(-60%,-50%) scale(1)";
    like1.style.color = "red";
    count1 = 1;

    setTimeout(function () {
      like.style.transform = " translate(-60%,-50%) scale(0)";
    }, 2000);
  } else {
    like1.style.color = "white";
    count1 = 0;
  }
});







