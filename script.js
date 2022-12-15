//* CLICK FUNCTION TO DESCRIPTION */

let desc = document.querySelector("[data-description]");
let desc2 = document.querySelectorAll(".description");

desc.addEventListener("click", function(){
 this.classList.toggle("active");
});

// desc.addEventListener("click", function(){

//   for(var i= 0; i < desc2.length; i++){
//     desc2[i].classList.toggle('active');
//   }

//   desc2.classList.toggle('active')

// })



