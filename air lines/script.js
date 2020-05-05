{/* <script> */}
       function myfunction() {
        var nav=document.getElementById("nav-item") ;
        if(nav.style.display=="none") {
            nav.style.display="block" ;
        } else {
            nav.style.display="none" ;
        }
       }
    // </script>
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