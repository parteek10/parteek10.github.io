//navigation bar
function myfunction() {
    var nav=document.getElementById("nav-item") ;
    if(nav.className=="toggle") {
        nav.className += " collapse" ;
    } else {
        nav.className="toggle" ;
    }
}
//accordian display
function accord_display(indx) {
    var x=document.getElementsByClassName("title-content") ;
    if(x[indx].style.display=="block")  {
        x[indx].style.display="none" ;
    } else {
        x[indx].style.display="block" ;
    }
}
//footer
var time =document.getElementById("timing") ;
setInterval(function () {
    time.innerHTML=Date() ;
} , 10) ;