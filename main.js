
$(document).ready(function(){

    
    $(".next").click(
        function(){
            var imgActive = $("img.active");
            imgActive.removeClass("active");

            if(imgActive.hasClass("last") == true){
                var nextImg = $("img.first");
            } else {
                var nextImg = imgActive.next();
            }
            nextImg.addClass("active");
        }
    );

    $(".prev").click(
        function(){
            var imgActive = $("img.active");
            imgActive.removeClass("active");

            if(imgActive.hasClass("first") == true){
                var nextImg = $("img.first");
            } else {
                var nextImg = imgActive.prev();
            }
            nextImg.addClass("active");
        }
    );   

    // circle

    function nextCircle(){

        var circleActive = $(".nav i.fa-circle.active");
        circleActive.removeClass("active");

        if(circleActive.hasClass("first") == true){
            var nextCircle = $(".nav i.fa-circle.first");
        } else {
            var nextCircle = circleActive.next();
        }
    }


    // funzione keydown per far girare le img con le frecce tastiera

    
    //  $(document).keydown(function(e){
    //     if(e.keyCode == 39)
    //     var nextImg = $("img.first");
    //  });   

    //  $(document).keydown(function(e){
    //     if(e.keyCode == 37)
    //     prev();
    //  });  


});
