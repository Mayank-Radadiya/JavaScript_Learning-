var div1 = document.querySelector("#img1");
var a = document.querySelector("#img1 img");

div1.addEventListener("mousemove",function(dets){
    a.style.left = dets.x+"px"
    a.style.top = dets.y+"px"
});
div1.addEventListener("mouseenter",function(dets){
    a.style.opacity =  1
});
div1.addEventListener("mouseleave",function(dets){
    a.style.opacity =  0
});
// ---------------------------------------------------------------------



var div2 = document.querySelector("#img2");
var b = document.querySelector("#img2 img");

div2.addEventListener("mousemove",function(dets){
    b.style.left = dets.x+"px"
    b.style.top = dets.y+"px"
});
div2.addEventListener("mouseenter",function(dets){
    b.style.opacity =  1
});
div2.addEventListener("mouseleave",function(dets){
    b.style.opacity =  0
});








var div3 = document.querySelector("#img3");
var c = document.querySelector("#img3 img");

div3.addEventListener("mousemove",function(dets){
    c.style.left = dets.x+"px"
    c.style.top = dets.y+"px"
});
div3.addEventListener("mouseenter",function(dets){
    c.style.opacity =  1
});
div3.addEventListener("mouseleave",function(dets){
    c.style.opacity =  0
});










var div4 = document.querySelector("#img4");
var d = document.querySelector("#img4 img");

div4.addEventListener("mousemove",function(dets){
    d.style.left = dets.x+"px"
    d.style.top = dets.y+"px"
});
div4.addEventListener("mouseenter",function(dets){
    d.style.opacity =  1
});
div4.addEventListener("mouseleave",function(dets){
    d.style.opacity =  0
});








var div5 = document.querySelector("#img5");
var e = document.querySelector("#img5 img");

div5.addEventListener("mousemove",function(dets){
    e.style.left = dets.x+"px"
    e.style.top = dets.y+"px"
});
div5.addEventListener("mouseenter",function(dets){
    e.style.opacity =  1
});
div5.addEventListener("mouseleave",function(dets){
    e.style.opacity =  0
});



// short code  for adding event listener to multiple elements at once:

// var elem = document.querySelectorAll(".imgcursor");
// elem.forEach(function(val){
//     console.log(val);
//     val.addEventListener("mouseenter",function(){
//     val.childNodes[3].style.opacity = 1
//     });
//     val.addEventListener("mouseleave",function(){
//         val.childNodes[3].style.opacity = 0
//         });
//     val.addEventListener("mousemove",function(dets){
//         val.childNodes[3].style.left = dets.x+"px"
//         val.childNodes[3].style.top = dets.y+"px"
//     });
// })