window.addEventListener('load',function(){
    var mySwiper = new Swiper('.swiper', {
        loop:true,
        speed: 1000,
        autoplay:{delay: 2000},
        pagination: {
            el: '.swiper-pagination',
        },
    })
    lazyLoadInit({
        offsetBottom:0,
        offsetTopm:0,
        showTime:100,
    });
})
$(function(){
    var t = $(".bottomMask").offset().top + $(".bottomMask").height();
    console.log(t);
    $(".foot").offset({top:t,left:0});
})