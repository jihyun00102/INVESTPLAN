$(document).ready(function(){
    $("#header").load("./header.html", function(){
        var $hash = location.hash;
        console.log($hash);
        var $num_hash = $hash.replace("#","");

        $("header nav ul li").eq($num_hash).addClass("active");
    });

    $(window).scroll(function(){
        var $srcoll_top = $(window).scrollTop();
        // console.log($srcoll_top);
        var $sc_evtBox = $("#header").offset().top;
        // console.log($sc_evtBox);

        if($srcoll_top == 0){
            $("#header").removeClass("active");
        }else{
            $("#header").addClass("active");
        }
    });

    $("#footer").load("./footer.html");
});