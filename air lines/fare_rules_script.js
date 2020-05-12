function myfunction() {
    var nav=document.getElementById("nav-item") ;
    if(nav.className=="toggle") {
        nav.className += " collapse" ;
    } else {
        nav.className="toggle" ;
    }
}
var time =document.getElementById("timing") ;
setInterval(function () {
    time.innerHTML=Date() ;
} , 10) ;