function myfunction() {
    var nav=document.getElementById("nav-item") ;
    if(nav.className=="toggle") {
        nav.className += " collapse" ;
    } else {
        nav.className="toggle" ;
    }
}

function display_flight_details(indx)  {
    window.location="routes/"+indx+".html" ;
}

var time =document.getElementById("timing") ;
setInterval(function () {
    time.innerHTML=Date() ;
} , 10) ;