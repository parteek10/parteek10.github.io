/* <script> */
    // function myfunction() {
    //     var nav=document.getElementById("nav-item") ;
    //     if(nav.className=="toggle") {
    //         nav.className+="collapse" ;
    //     } else {
    //         nav.className="toggle" ;
    //     }
    //    }
       function myfunction() {
        var nav=document.getElementById("nav-item") ;
        if(nav.style.display=="none") {
            nav.style.display="block" ;
        } else {
            nav.style.display="none" ;
        }
       }
    // </script>
    // Form validation 
    function max_limit(x) {
        var y=x.value ;
        y=Number(y) ;
        if(y>=5) {
            alert("Maximum four persons are allowed from each category.") ;
        }
    }
    function validation() {
        var x= document.getElementById("departing-location").value ;
        x=Number(x) ;
        var y = document.getElementById("destination").value ;
        y=Number(y) ;
        var dep=document.getElementById("departing-date").value ;
        var arrival=document.getElementById("returning-date").value ;
        var adult=document.getElementById("adults").value ;
        adult=Number(adult) ;
        var child=document.getElementById("children").value ;
        child=Number(child) ;
        var infant=document.getElementById("infants").value ;
        infant=Number(infant) ;
        if(x==1||y==1)  {
            alert("Fill the departing location and destination properly .");
        }else if(dep=="NULL"||arrival=="NULL"||new Date(dep).getTime() > new Date(arrival).getTime() ) {
             alert("Enter correct departure and arrival date ") ;
        } else if(adult>=5||child>=5||infant>=5)  {
            alert("Maximum four persons are allowed from each category.")
        } else {
            window.location="file:///C:/Users/Dell/Desktop/html/webdparteek/COVID-19.html" ;
        }

    }

    // <script>
        if(Number(screen.availWidth) <= 768) {
            var indx=1 ;
        }  else {
            var indx=2 ;
        }
        function currentSlide(x) {
            showSlides(indx=x) ;
        }
        function plusSlides(x) {
            showSlides(indx+=x) ;
        }
        function showSlides(n) { 
            var i ;
            var slides=document.getElementsByClassName("slides") ;
            var dots=document.getElementsByClassName("dot") ;
            
            for(i=0;i<slides.length;i++) {
                slides[i].style.display="none" ;
            }
            if(Number(screen.availWidth) <= 768 ) {
                if(n > slides.length)  {
              indx=1 ;
            }
            if(n < 1)  {
                indx=slides.length ;
            }
                slides[indx-1].style.display="block";
            } 
            else {
                dots[0].style.display="none" ;
                if(n > slides.length)  {
              indx=2 ;
            }
            if(n < 2)  {
                indx=slides.length ;
            }
                slides[indx-1].style.display="block";
            slides[indx-2].style.display="block";

            }
        }
    // </script>
    // <script>
        var time =document.getElementById("timing") ;
        
        setInterval(function () {
            time.innerHTML=Date() ;
        } , 10) ;
    // </script>