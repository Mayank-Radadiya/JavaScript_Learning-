let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let img = document.querySelector("#img")


main.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.5
    })
})

img.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    
    gsap.to(cursor,{
        scale:3.5,
        backgroundColor:"#848383c9"
    })
})

img.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})