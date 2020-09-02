
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




});
