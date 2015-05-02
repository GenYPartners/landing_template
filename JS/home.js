$(window).scroll(function () {
    winHeight = $(window).height();
    if ($(window).scrollTop() > winHeight) {
        $(".navbar").css("background-color","white");
        $('.navbar').attr("class","navbar-fixed-top");
        $("#section2").css("top","-3.2%") 
    }
});
