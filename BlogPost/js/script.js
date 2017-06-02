function autoScroll(el){
    var z=document.getElementById(el).getBoundingClientRect().top;
        $('body').animate({opacity:.7,
            scrollLeft: z+$(window).scrollLeft())
        }, 800);

        $('body').animate({opacity:1
        }, 300);
}
