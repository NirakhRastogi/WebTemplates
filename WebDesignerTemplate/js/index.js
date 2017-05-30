$(function() {
    $('body').animate({
            scrollTop:0
        }, 800);
    $(window).scroll(function() {
        if($(window).scrollTop()>=300){
            $('nav').addClass('scrolled');
        }else{
            $('nav').removeClass('scrolled');
        }
    });
     $(window).scroll(function() {
        var dif = document.documentElement.clientHeight;
        var height = document.documentElement.scrollHeight;
        console.log(height);
        console.log($(window).scrollTop());
        if($(window).scrollTop()>=height-950){
            $('#footer_main').removeClass('show');
            $('#footer_main').addClass('hide');
        }else{
            $('#footer_main').addClass('show');
            $('#footer_main').removeClass('hide');
        }
    });
});


function autoScroll(el){
    var z=document.getElementById(el).getBoundingClientRect().top;
        $('body').animate({opacity:.7,
            scrollTop: z+$(window).scrollTop()
        }, 800);

        $('body').animate({opacity:1
        }, 300);
}


function toggleLikeUnlike(el){
    var z=$('#'+el);
    if(z.hasClass('liked')){
        z.removeClass('liked')
        z.addClass('unliked')
    }else{
        z.removeClass('unliked')
        z.addClass('liked')
    }
}
