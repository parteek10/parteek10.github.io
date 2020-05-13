// form validation  
function name_validation(x , y) {
    var name=x.value ;
    var ele=document.getElementsByClassName("alert") ;
    var pattern=/^[A-Za-z]+$/ ;
    if(!name.match(pattern) ) {
        x.style.backgroundColor="#ffffd5" ;
        ele[y].style.visibility="visible" ;
       ele[y].innerHTML="enter correct value (i.e. only alphabets )" ; 
    } else {
        ele[y].style.visibility="hidden" ;
        x.value = x.value.toUpperCase() ;
        x.style.backgroundColor="white" ;
    }
}
function email_validation(x)  {
    var name=x.value ;
    var ele=document.getElementsByClassName("alert") ;
    var pattern=/^[A-Za-z@._0-9]+$/ ;
    if(name.match(pattern) && name.indexOf("@")!=-1 && name.indexOf(".")!=-1 && name.indexOf("@")+2 < name.indexOf("."))  {
        ele[2].style.visibility="hidden" ;
        x.style.backgroundColor="white" ;
    }  else {
        x.style.backgroundColor="#ffffd5" ;
        ele[2].style.visibility="visible" ;
        ele[2].innerHTML="enter correct email address" ;
    }
}
function number_validation(x) {
    var num = x.value ;
    var ele=document.getElementsByClassName("alert") ;
    if(Number(num.length) != 10 )  {
        x.style.backgroundColor="#ffffd5" ;
        ele[3].style.visibility="visible" ;
        ele[3].innerHTML="enter correct contact number!" ;
    } else {
        ele[3].style.visibility="hidden" ;
        x.style.backgroundColor="white" ;
    }
} 
function username_validation(x)  {
    var name=x.value ;
    var ele=document.getElementsByClassName("alert") ;
    var pattern=/^[A-Za-z_0-9]+$/ ;
    if(name.match(pattern) && name.length > 4 ) {
        ele[4].style.visibility="hidden" ;
        x.style.backgroundColor="white" ;
    }  else {
        x.style.backgroundColor="#ffffd5" ;
        ele[4].style.visibility="visible" ;
        ele[4].innerHTML="enter correct user name (only alphabets , disgits or underscores can be used )" ;
    }
}
function password_validation(x)  {
    var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,15}$/;
    var pass=x.value ;
    var ele=document.getElementsByClassName("alert") ;
    if(pass.match(pattern))  {
        ele[5].style.visibility="hidden" ;
        x.style.backgroundColor="white" ;
    } else  {
        x.style.backgroundColor="#ffffd5" ;
        ele[5].style.visibility="visible" ;
        ele[5].innerHTML="enter correct password ." ;
    }
}
function pass_confirmation(x)  {
    var c_pass=x.value ;
    var ele=document.getElementsByClassName("alert") ;
    pass=document.getElementById("password").value ;
    if(c_pass===pass)  {
        ele[6].style.visibility="hidden" ;
        x.style.backgroundColor="white" ;
    } else {
        x.style.backgroundColor="#ffffd5" ;
        ele[6].style.visibility="visible" ;
        ele[6].innerHTML="this value should be the same ." ;
    }
}
function display_information_box() {
    var box=document.getElementById("information_box") ;
    if(box.style.display=="block") {
        box.style.display="none" ;
    } else {
        box.style.display="block" ;
    }
}
function validation(e) {
    e.preventDefault() ;
    var data=document.getElementsByClassName("data") ;
    var pattern1=/^[A-Za-z].{3,15}$/ ;
    var pattern2=/^[A-Za-z@._0-9]+$/ ;
    var pattern3=/^[A-Za-z_0-9].{3,15}$/ ;
    var pattern4=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,15}$/;
    if(data[0].value.match(pattern1) && data[1].value.match(pattern1) && data[2].value.match(pattern2) && data[3].value.length==10 && data[4].value.match(pattern3) &&
    data[5].value.match(pattern4) && data[5].value == data[6].value )  {
        alert("Signed In successfully.") ;
        window.location ="index.html" ;
    } else {
        alert("enter all values correctly ") ;
    }
}