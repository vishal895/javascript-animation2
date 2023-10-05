// first project
// var a = document.querySelector("h5")

// var b = document.querySelector(".btn")
//  var change = 0

// b.addEventListener("click",function(){
//     if(change == 0){
//         a.innerHTML ="remove"
//         a.style.color ="red"
//         b.innerHTML ="remove friend"
//         change = 1
//     }else{
//         a.innerHTML ="stranger"
//         a.style.color ="green"
//         b.innerHTML ="add friend"
//         change = 0
//     }

// })

// second project

// var a = document.querySelector(".container");
// var b = document.querySelector("i");

// a.addEventListener("dblclick", function() {
//         b.style.transform = "translate(-50%,-50%) scale(1)";
//         b.style.opacity = 0.8;
//         setTimeout(function ()
//          {
//             b.style.transform = "translate(-50%,-50%) scale(0)";
//         }, 1000);
//     })

// third project

// var a = document.querySelector(".main")
// var b = document.querySelector(".cursor")

// a.addEventListener("mousemove",function(dets){
//         b.style.left = dets.x+"px"
//         b.style.top = dets.y+"px"
// })
// fourth project
// var a = document.querySelectorAll(".elem")

// a.forEach(function(val){
//     val.addEventListener("mouseenter",function(){
//         val.childNodes[3].style.opacity = 1
//     });
//     val.addEventListener("mouseleave",function(){
//         val.childNodes[3].style.opacity = 0
//     })
//     val.addEventListener("mousemove",function(dets){
//         val.childNodes[3].style.left = dets.x+"px"
//         val.childNodes[3].style.top = dets.y+"px"
//     })

// })
// fifth project
// var arr = [
//   {
//     dp: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphotogallery.indiatimes.com%2Ffashion%2Findian-models%2Ftop-10-indian-male-fashion-models%2Farticleshow%2F80482278.cms&psig=AOvVaw2bX6horxcycjtmpoN7dASK&ust=1696362628314000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiSzLCR2IEDFQAAAAAdAAAAABAE",
//     story:
//       "https://www.shutterstock.com/image-photo/beautiful-woman-profile-long-shiny-600w-1922411411.jpg",
//   },{
//     dp:"https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//     story:"https://media.istockphoto.com/id/1427922205/photo/smiling-model-with-perfect-white-teeth-beautiful-indian-girl-cheerful-smiling-beauty-woman.jpg?s=612x612&w=0&k=20&c=LlEZGr3uxct9NATLpudq4Avbib9mFrP_nOJ0kBE06T0="
    
//   },
//   {
//     dp: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphotogallery.indiatimes.com%2Ffashion%2Findian-models%2Ftop-10-indian-male-fashion-models%2Farticleshow%2F80482278.cms&psig=AOvVaw2bX6horxcycjtmpoN7dASK&ust=1696362628314000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiSzLCR2IEDFQAAAAAdAAAAABAE",
//     story:
//       "https://www.shutterstock.com/image-photo/beautiful-woman-profile-long-shiny-600w-1922411411.jpg",
//   },{
//     dp:"https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//     story:"https://media.istockphoto.com/id/1427922205/photo/smiling-model-with-perfect-white-teeth-beautiful-indian-girl-cheerful-smiling-beauty-woman.jpg?s=612x612&w=0&k=20&c=LlEZGr3uxct9NATLpudq4Avbib9mFrP_nOJ0kBE06T0="
    
//   }
// ];

// var clutter = "";
// arr.forEach(function (elem, idx) {
//   clutter += `<div class="story">
//     <img  id="${idx}" src="${elem.dp}" alt=""/>
// </div>`;
// });
// document.querySelector(".storiya").innerHTML = clutter;


// sixth project
// window.addEventListener("mousemove",function(dets){
//   var rect = document.querySelector(".rectbox");

//   var xval = gsap.utils.mapRange(
//     0,
//     window.innerWidth,
//     200 + rect.getBoundingClientRect().width/2,
//     window.innerWidth - (200 + rect.getBoundingClientRect().width/2),
//     dets.clientX
//   );
//     gsap.to(".rectbox",{
//       left: xval,
//       ease: Power3,
//     });
// });

//  api integrate in javascript 

// fetch('https://api.example.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); 
//   })
//   .then(data => {
    
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

// async and await
// async function fetchData() {
//   try {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchData();
// seventh project 
// function createbubble (){
// var clutter ="" ;

// for (var i = 1; i<=170; i++){
//   var no = Math.floor(Math.random()*10)
//     clutter += `<div class="bubble_box">${no}</div>`;
// }

// document.querySelector(".bubble").innerHTML = clutter;
// }

// var timer = 60
// function timerchala (){
//   var timeper = setInterval(function(){
//     if(timer>0){
//       timer--;
//     document.querySelector("#tm").innerHTML = timer;
//     }else{
//       clearInterval(timeper)
//       document.querySelector(".bubble").innerHTML = "";
//     }
    
//   },1000)
  
// }
// var ht = 0;
// function hit (){
//   ht = Math.floor(Math.random()*10);
//  document.querySelector("#htk").innerHTML = ht;
// }
//  var increase = 0;

// function score (){
//    increase += 10
//   document.querySelector("#score").innerHTML = increase;
  
// }
//  document.querySelector(".bubble")
//  .addEventListener("click",function(dets){
//   var clicknum = Number(dets.target.textContent)
//   if(clicknum === ht){
//     score();
//     createbubble(); 
//     hit();
    
//   }

// })

// timerchala();
// hit();
// createbubble();
// score();
// 



// eight project