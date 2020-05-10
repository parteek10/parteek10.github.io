//header 
function myfunction() {
    var nav=document.getElementById("nav-item") ;
    if(nav.className=="toggle") {
        nav.className += " collapse" ;
    } else {
        nav.className="toggle" ;
    }
}
// form validation 
function name_validation(x)  {
    var name = x.value ;
    var ele=document.getElementsByClassName("alert") ;
    if(Number(name.length)<2) {
       ele[0].style.display="block" ;
       ele[0].innerHTML="This field is required!" ; 
    } else {
        ele[0].style.display="none" ;
        x.value = x.value.toUpperCase() ;
    } 
}
function password_validation(x) {
    var pass = x.value ;
    var ele=document.getElementsByClassName("alert") ;
    if(Number(pass.length)<1) {
       ele[1].style.display="block" ;
       ele[1].innerHTML="This field is required!" ; 
    } else if(Number(pass.length)<7) {
       ele[1].style.display="block" ;
       ele[1].innerHTML="create a strong password of minimum length six characters" ;
    } else {
        ele[1].style.display="none" ;
    }
}
function validation(e)  {
    var flag =0 ;
    e.preventDefault() ;
    x=document.getElementById("user_name")
    var name = x.value ;
    var ele=document.getElementsByClassName("alert") ;
    if(Number(name.length)<1) {
       ele[0].style.display="block" ;
       ele[0].innerHTML="This field is required!" ; 
    } else {
        ele[0].style.display="none" ;
        x.value = x.value.toUpperCase() ;
        flag=1 ;
    }
    var y=document.getElementById("password") ;
    var pass = y.value ;
    if(Number(pass.length)<1) {
       ele[1].style.display="block" ;
       ele[1].innerHTML="This field is required!" ; 
       flag=0 ;
    } else if(Number(pass.length)<7) {
       ele[1].style.display="block" ;
       ele[1].innerHTML="create a strong password of minimum length six characters" ;
       flag=0 ;
    } else {
        ele[1].style.display="none" ;
        flag=1 ;
    }
    if(flag==1)  {
        alert("Site is under maintenance . Thanku for visiting us !")
    } else  {
        return false ;
    }
    
}
//footer
var time =document.getElementById("timing") ;
setInterval(function () {
    time.innerHTML=Date() ;
} , 10) ;