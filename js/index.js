$(document).ready(()=>{
    $("#play").click(()=>$("#player").toggle(1000))
    $("#main, #intro").fadeIn(3000);
    $('#head-nav a').click(function(e) {
        var targetHref = $(this).attr('href');
        var navbarHeight = $('.navbar').height() * 2;
        console.log(navbarHeight);
        $('html, body').animate({
            scrollTop: ($(targetHref).offset().top - navbarHeight)
        }, 1000);
        e.preventDefault();
    })
})
  