document.addEventListener('DOMContentLoaded', function(){

    const intViewportWidth = window.innerWidth;
    if(intViewportWidth < 575){
        document.querySelector(".header-nav").style.display = "none"
    }


    //making menu visible after clicking on hamburger menu icon
    document.querySelector(".fa-bars").addEventListener("click", function () {

        if(document.querySelector(".header-nav").style.display === "none"){
            document.querySelector(".header-nav").style.display = "block";
        }else{
            document.querySelector(".header-nav").style.display = "none"
        }

    });

});