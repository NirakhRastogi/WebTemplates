$(function(){
    $(window).scroll(function(event) {
        console.log($(window).scrollTop());
        if($(window).scrollTop()>130){
            $('nav').addClass('position_fixed');
            $('#broad_info').removeClass('show_in_display');
            $('#broad_info').addClass('hide_in_display');
            $('#mini_info').removeClass('hide_in_display');
            $('#mini_info').addClass('show_in_display');
            $('#container').removeClass('height1');
            $('#container').addClass('height2');
        }else{
            $('nav').removeClass('position_fixed');
            $('#broad_info').removeClass('hide_in_display');
            $('#broad_info').addClass('show_in_display');
            $('#mini_info').removeClass('show_in_display');
            $('#mini_info').addClass('hide_in_display');
            $('#container').removeClass('height2');
            $('#container').addClass('height1');
        }
    });
});

function fly_in_sky(el){
    setTimeout(function(){
        $('#'+el).addClass('fly-in-sky');
    },1);
    setTimeout(function(){
    $('#'+el).removeClass('fly-in-sky');},3001);
}

function toggleLike(el){
    if($('#'+el).hasClass('liked')){
        $('#'+el).removeClass('liked');
        $('#'+el).addClass('unliked');
    }else
    {
        $('#'+el).removeClass('unliked');
        $('#'+el).addClass('liked');
    }
}
