document.addEventListener('DOMContentLoaded', function(){
  console.log("loaded");
  document.querySelector('.circle3').addEventListener("mouseover", startT, false);
  //  console.log(circle);
}, false);

function startT(e){
  console.log("mouseover");
  var circle = document.querySelector('.circle3');
 circle.classList.add("circle3-state-one");
  circle.addEventListener("transitionend",loopTransition,false);
}

function loopTransition(e){
  console.log("transitionend"+ e.propertyName);
  var circle = document.querySelector('.circle3');
 if(e.propertyName == "background-color"){
   if (circle.classList.contains("circle3-state-one")){
     circle.classList.remove("circle3-state-one");
     circle.classList.add("circle3-state-two");
   }else if (circle.classList.contains("circle3-state-two")) {
     circle.classList.remove("circle3-state-two");
     circle.classList.add("circle3-state-one");
   }
 }
}
