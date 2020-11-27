$(function(){
    touch.on($('nav li:eq(0)'),'touchstart',function(){
        $('nav li:eq(0) .up').toggle();
        $('nav li:eq(0) .down').toggle();
        $('.price').hide();
        $('.house-type').hide();
        $('.more').hide();
        $('.area').toggle();
    });
    touch.on($('nav li:eq(1)'),'touchstart',function(){
        $('nav li:eq(1) .up').toggle();
        $('nav li:eq(1) .down').toggle();
        $('.house-type').hide();
        $('.more').hide();
        $('.area').hide();
        $('.price').toggle();
    });
    touch.on($('nav li:eq(2)'),'touchstart',function(){
        $('nav li:eq(2) .up').toggle();
        $('nav li:eq(2) .down').toggle();
        $('.more').hide();
        $('.area').hide();
        $('.price').hide();
        $('.house-type').toggle();
    });
    touch.on($('.checked'),'touchstart',function(){
        $('.checked').children().hide();
        $(this).children().toggle();
    })
    touch.on($('nav li:eq(3)'),'touchstart',function(){
        $('nav li:eq(3) .up').toggle();
        $('nav li:eq(3) .down').toggle();
        $('.area').hide();
        $('.price').hide();
        $('.house-type').hide();
        $('.more').toggle();
    });
    touch.on($('.more li'),'touchstart',function(){
        $('.more li').css({
            'border':'1px solid lightgray',
            'color':'#666'
        });
       $(this).css({
           'border':'1px solid orange',
           'color':'orange'
       });
    })
})
