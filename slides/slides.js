document.addEventListener('DOMContentLoaded', function() {
  console.log("loaded");
  var controls=document.querySelectorAll("input[type=radio]");
  var dots=document.querySelectorAll('.dot');
  for(var i=0; i<controls.length;i++){
    // controls[i].addEventListener('click', slide, false);
     controls[i].addEventListener("change",slide, false);
    // dots[i].addEventListener('click', changeDot, false);
  }
},false);

function slide (e){
  console.log("changeDot:" + e.type);
  var control=e.target;
  var label=control.id;
  var dot=document.querySelector('label[for='+label+']');
  document.querySelector('.selected').classList.remove("selected");
  dot.classList.add("selected");
  if(control.checked){
    var n =parseInt(e.target.value)*(-0.2)*100;
    console.log("n: "+n);
    document.querySelector('.sliders').style.transform="translate3d(" +
         n + "\%, "+
        "0px, 0px)" ;
    }
}
