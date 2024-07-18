$(function(){
    $(document).ready(function(){
        $('.news_sec .news_slide > .box01').click(function(){
            $('.news_sec .news_slide > .box .blind').toggleClass('show');
            $('.news_sec .news_slide .arrow_box img').toggleClass('down');
        })

        $('.tab_list > li').click(function(){
            $('.tab_list > li').removeClass('active');
            $(this).addClass('active');
            // $('.news_sec > div').eq($(this).index()).fadeIn(300).siblings('.news_sec > div').hide();
        }).filter(':eq(0)').click();

        $('.subscribe_sec .sub_tab_list li').click(function(){
            $('.subscribe_sec .sub_tab_list li').removeClass('active');
            $(this).addClass('active');
        }).filter(':eq(0)').click();
    })
})