document.addEventListener("DOMContentLoaded", main, false);

function main(){

  var dots = document.querySelectorAll('.dot');
  for(var i=0; i<dots.length; i++){
      var dot=dots[i];
      dot.addEventListener("transitionend", reTransition, false);
      dot.style.transitionDuration = Math.random() *10 +1 + "s";
      dot.style.transform = "translate3d("
                                      + Math.random()*600 + "px, "
                                      + Math.random()*600 + "px, "
                                      + Math.random()*600 + "px )";

  }
  function reTransition (e) {
    console.log("reTransition");
    var dot=e.target;
    dot.style.scale=Math.random()+ 0.1;
    dot.style.opacity=Math.random()+ 0.2;
    dot.style.transitionDuration = Math.random() *10 +1 +"s";
    dot.style.transform = "translate3d("
                                    + Math.random()*600 + "px, "
                                    + Math.random()*600 + "px, "
                                    + Math.random()*600 + "px )";

  }

}
