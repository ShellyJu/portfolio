// Smooth scrolling using jQuery easing
$('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        this.siblings().removeClass("active");
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top)
            }, 1200, "easeInOutExpo");
            return false;
        }
    }
});

// https://dometi.com.tw/blog/one-page-scroll/

var sectionIds = {};

$(".section").each(function () {
    var $this = $(this);
    sectionIds[$this.attr("id")] = $this.offset().top;
});
//    設定sectionIds為空的。
//    分別抓取class為section的元素。
//    再把 section 裡面的 id 指定為 sectionIds。
//    offset 是抓取相對位子 offest().top 則是抓取高度。
//    first()字面上的意思，抓取第一個 .section 的相對高度。


$(window).scroll(function (event) {
    var scrolled = $(this).scrollTop();
    for (key in sectionIds) {
        if (scrolled >= sectionIds[key]) {
            $("#navbarSupportedContent li").siblings().removeClass("active");
            var c = $("[data-id=" + key + "]");
            c.addClass("active");
        }
    }
});
//    window視窗滾動時執行該事件。
//    scrolltop是卷軸的位子的高度。
//    如果卷軸的位子高度>=現在的元素高度則加入active這個class。
//    key則是sectionIds的id。
//    以上語法就可以達成滾動到此會亮燈的效果。 

$("#navbarSupportedContent li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

});
// 當 #navbarSupportedContent li（選擇器）被點擊的時候
// 把被點擊的元素+上class


//navbar-collapse 點按後收起
$("#navbarSupportedContent").click(function () {
    $(".navbar-collapse").collapse("hide");
});

//動畫方式回到上層
$(".navbar-brand").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
});



// $(function gotop(){
//     $("#gotop").click(function(){
//         jQuery("html,body").animate({
//         scrollTop:0
//         },1000);
//     });
//     $(window).scroll(function() {
//         if ( $(this).scrollTop() > 300){
//         $('#gotop').fadeIn("fast");
//         } else {
//         $('#gotop').stop().fadeOut("fast");
//         }
//     });
// });


// AOS
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
