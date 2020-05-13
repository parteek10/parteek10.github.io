// form validation 
function name_validation(x)  {
    var name = x.value ;
    var ele=document.getElementsByClassName("alert") ;
    if(Number(name.length)<2) {
       ele[0].style.display="block" ;
       ele[0].innerHTML="This field is required!" ; 
       x.style.backgroundColor="#ffffd5" ;
    } else {
        ele[0].style.display="none" ;
        x.value = x.value.toUpperCase() ;
        x.style.backgroundColor="white" ;
    } 
}
function password_validation(x) {
    var pass = x.value ;
    var ele=document.getElementsByClassName("alert") ;
    if(Number(pass.length)<1) {
       ele[1].style.display="block" ;
       ele[1].innerHTML="This field is required!" ; 
       x.style.backgroundColor="#ffffd5" ;
    } else if(Number(pass.length)<7) {
       ele[1].style.display="block" ;
       ele[1].innerHTML="enter correct password (i.e. minimum 6 characters)" ;
       x.style.backgroundColor="#ffffd5" ;
    } else {
        ele[1].style.display="none" ;
        x.style.backgroundColor="white" ;
    }
}
function validation(e)  {
    var flag =0 ;
    e.preventDefault() ;
    x=document.getElementById("user_name")
    var name = x.value ;
    var ele=document.getElementsByClassName("alert") ;
    var y=document.getElementById("password") ;
    var pass = y.value ;
    if(Number(name.length)<1) {
       ele[0].style.display="block" ;
       ele[0].innerHTML="This field is required!" ; 
       x.style.backgroundColor="#ffffd5" ;
    } else {
        ele[0].style.display="none" ;
        x.value = x.value.toUpperCase() ;
        flag=1 ;
        x.style.backgroundColor="white" ;
    }
    if(Number(pass.length)<1) {
       ele[1].style.display="block" ;
       ele[1].innerHTML="This field is required!" ; 
       flag=0 ;
       y.style.backgroundColor="#ffffd5" ;
    } else if(Number(pass.length)<7) {
       ele[1].style.display="block" ;
       ele[1].innerHTML="enter correct password" ;
       flag=0 ;
       y.style.backgroundColor="#ffffd5" ;
    } else {
        ele[1].style.display="none" ;
        flag=1 ;
        y.style.backgroundColor="white" ;
    }
    if(flag==1)  {
        alert("Site is under maintenance . Thanku for visiting us !")
    } else  {
        return false ;
    }
}
