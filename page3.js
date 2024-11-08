$(function () {
  $(".nav").mouseover(function () {
    $(".sub_me").stop().slideDown();
    $(".sub_me").css("display", "flex");
  });
  $(".sub_me").mouseleave(function () {
    $(".sub_me").stop().slideUp();
    $(".sub_me").css("display", "flex");
  });
});

$(".menu_btn p:nth-child(1)").click(function () {
  let t = $(".ctn").offset().top;
  $("html").stop().animate({ scrollTop: t }, 500);
});

$(".menu_btn p:nth-child(2)").click(function () {
  let t = $(".ctn_02").offset().top;
  $("html").stop().animate({ scrollTop: t }, 500);
});

$(".menu_btn p:nth-child(3)").click(function () {
  let t = $(".ctn_03").offset().top;
  $("html").stop().animate({ scrollTop: t }, 500);
});
