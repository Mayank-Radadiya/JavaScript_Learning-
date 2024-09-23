const  notescontainer = document.querySelector("#white-notes");
const addbtn = document.querySelector("#addbtn");
let notes = document.querySelectorAll(".inputbox");
let deletebtn = document.querySelector(".deletebtn");


function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}



addbtn.addEventListener("click" ,()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable","true");
    img.src = "delete.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})


// // Youtubr code    not working for me :(


// // notescontainer.addEventListener("click", function (e) {
// //     if (e.target.tagName === "IMG") {
// //       // Remove the parent element of the clicked element, which is the input box that contains the delete button
// //       e.target.parentElement.remove();
// //       updateStorage();
// //     }
// //     else if(e.target.tagName === "p"){
// //         notes.document.querySelectorAll(".inputbox");
// //         notes.forEach(nt => {
// //             nt.onkeyup = function(){
// //                 updateStorage();
// //             }
// //         })
// //     }
// //   });


// Chat Gpt Code
notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        // Remove the parent element of the clicked element, which is the input box that contains the delete button
        e.target.parentElement.remove();
        updateStorage();
    }
});
  notescontainer.addEventListener("input", function (e) {
    if (e.target.tagName === "P") {
        updateStorage();
    }
});