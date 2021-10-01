var button = document.getElementById("button") ;
var screen = document.getElementById("screen") ;

button.onclick=function () {
    var red = document.getElementById("box").value;
    var green = document.getElementById("box2").value;
    var blue = document.getElementById("box3").value;
    
     screen.style.backgroundColor="rgb("+red+","+green+","+blue+")" ;
}



